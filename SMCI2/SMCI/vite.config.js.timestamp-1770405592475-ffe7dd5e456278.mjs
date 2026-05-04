// vite.config.js
import path from "node:path";
import react from "file:///C:/Users/vmash/OneDrive/Desktop/SMCI2/SMCI/node_modules/@vitejs/plugin-react/dist/index.js";
import { createLogger, defineConfig } from "file:///C:/Users/vmash/OneDrive/Desktop/SMCI2/SMCI/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "C:\\Users\\vmash\\OneDrive\\Desktop\\SMCI2\\SMCI";
var isDev = process.env.NODE_ENV !== "production";
var configHorizonsViteErrorHandler = `
const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const addedNode of mutation.addedNodes) {
			if (
				addedNode.nodeType === Node.ELEMENT_NODE &&
				(
					addedNode.tagName?.toLowerCase() === 'vite-error-overlay' ||
					addedNode.classList?.contains('backdrop')
				)
			) {
				handleViteOverlay(addedNode);
			}
		}
	}
});

observer.observe(document.documentElement, {
	childList: true,
	subtree: true
});

function handleViteOverlay(node) {
	if (!node.shadowRoot) {
		return;
	}

	const backdrop = node.shadowRoot.querySelector('.backdrop');

	if (backdrop) {
		const overlayHtml = backdrop.outerHTML;
		const parser = new DOMParser();
		const doc = parser.parseFromString(overlayHtml, 'text/html');
		const messageBodyElement = doc.querySelector('.message-body');
		const fileElement = doc.querySelector('.file');
		const messageText = messageBodyElement ? messageBodyElement.textContent.trim() : '';
		const fileText = fileElement ? fileElement.textContent.trim() : '';
		const error = messageText + (fileText ? ' File:' + fileText : '');

		window.parent.postMessage({
			type: 'horizons-vite-error',
			error,
		}, '*');
	}
}
`;
var configHorizonsRuntimeErrorHandler = `
window.onerror = (message, source, lineno, colno, errorObj) => {
	const errorDetails = errorObj ? JSON.stringify({
		name: errorObj.name,
		message: errorObj.message,
		stack: errorObj.stack,
		source,
		lineno,
		colno,
	}) : null;

	window.parent.postMessage({
		type: 'horizons-runtime-error',
		message,
		error: errorDetails
	}, '*');
};
`;
var configHorizonsConsoleErrroHandler = `
const originalConsoleError = console.error;
console.error = function(...args) {
	originalConsoleError.apply(console, args);

	let errorString = '';

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg instanceof Error) {
			errorString = arg.stack || \`\${arg.name}: \${arg.message}\`;
			break;
		}
	}

	if (!errorString) {
		errorString = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
	}

	window.parent.postMessage({
		type: 'horizons-console-error',
		error: errorString
	}, '*');
};
`;
var configWindowFetchMonkeyPatch = `
const originalFetch = window.fetch;

window.fetch = function(...args) {
	const url = args[0] instanceof Request ? args[0].url : args[0];

	// Skip WebSocket URLs
	if (url.startsWith('ws:') || url.startsWith('wss:')) {
		return originalFetch.apply(this, args);
	}

	return originalFetch.apply(this, args)
		.then(async response => {
			const contentType = response.headers.get('Content-Type') || '';

			// Exclude HTML document responses
			const isDocumentResponse =
				contentType.includes('text/html') ||
				contentType.includes('application/xhtml+xml');

			if (!response.ok && !isDocumentResponse) {
					const responseClone = response.clone();
					const errorFromRes = await responseClone.text();
					const requestUrl = response.url;
					console.error(\`Fetch error from \${requestUrl}: \${errorFromRes}\`);
			}

			return response;
		})
		.catch(error => {
			if (!url.match(/.html?$/i)) {
				console.error(error);
			}

			throw error;
		});
};
`;
var configNavigationHandler = `
if (window.navigation && window.self !== window.top) {
	window.navigation.addEventListener('navigate', (event) => {
		const url = event.destination.url;

		try {
			const destinationUrl = new URL(url);
			const destinationOrigin = destinationUrl.origin;
			const currentOrigin = window.location.origin;

			if (destinationOrigin === currentOrigin) {
				return;
			}
		} catch (error) {
			return;
		}

		window.parent.postMessage({
			type: 'horizons-navigation-error',
			url,
		}, '*');
	});
}
`;
var addTransformIndexHtml = {
  name: "add-transform-index-html",
  transformIndexHtml(html) {
    const tags = [
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsRuntimeErrorHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsViteErrorHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsConsoleErrroHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configWindowFetchMonkeyPatch,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configNavigationHandler,
        injectTo: "head"
      }
    ];
    if (!isDev && process.env.TEMPLATE_BANNER_SCRIPT_URL && process.env.TEMPLATE_REDIRECT_URL) {
      tags.push(
        {
          tag: "script",
          attrs: {
            src: process.env.TEMPLATE_BANNER_SCRIPT_URL,
            "template-redirect-url": process.env.TEMPLATE_REDIRECT_URL
          },
          injectTo: "head"
        }
      );
    }
    return {
      html,
      tags
    };
  }
};
console.warn = () => {
};
var logger = createLogger();
var loggerError = logger.error;
logger.error = (msg, options) => {
  var _a;
  if ((_a = options == null ? void 0 : options.error) == null ? void 0 : _a.toString().includes("CssSyntaxError: [postcss]")) {
    return;
  }
  loggerError(msg, options);
};
var vite_config_default = defineConfig({
  base: "/",
  customLogger: logger,
  plugins: [
    react(),
    addTransformIndexHtml
  ],
  server: {
    port: 3e3,
    host: "localhost",
    cors: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless"
    },
    allowedHosts: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      external: [
        "@babel/parser",
        "@babel/traverse",
        "@babel/generator",
        "@babel/types"
      ]
    },
    copyPublicDir: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2bWFzaFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFNNQ0kyXFxcXFNNQ0lcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHZtYXNoXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcU01DSTJcXFxcU01DSVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdm1hc2gvT25lRHJpdmUvRGVza3RvcC9TTUNJMi9TTUNJL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbmNvbnN0IGNvbmZpZ0hvcml6b25zVml0ZUVycm9ySGFuZGxlciA9IGBcbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuXHRmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuXHRcdGZvciAoY29uc3QgYWRkZWROb2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0YWRkZWROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuXHRcdFx0XHQoXG5cdFx0XHRcdFx0YWRkZWROb2RlLnRhZ05hbWU/LnRvTG93ZXJDYXNlKCkgPT09ICd2aXRlLWVycm9yLW92ZXJsYXknIHx8XG5cdFx0XHRcdFx0YWRkZWROb2RlLmNsYXNzTGlzdD8uY29udGFpbnMoJ2JhY2tkcm9wJylcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGhhbmRsZVZpdGVPdmVybGF5KGFkZGVkTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcblx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRzdWJ0cmVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gaGFuZGxlVml0ZU92ZXJsYXkobm9kZSkge1xuXHRpZiAoIW5vZGUuc2hhZG93Um9vdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGJhY2tkcm9wID0gbm9kZS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xuXG5cdGlmIChiYWNrZHJvcCkge1xuXHRcdGNvbnN0IG92ZXJsYXlIdG1sID0gYmFja2Ryb3Aub3V0ZXJIVE1MO1xuXHRcdGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblx0XHRjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKG92ZXJsYXlIdG1sLCAndGV4dC9odG1sJyk7XG5cdFx0Y29uc3QgbWVzc2FnZUJvZHlFbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWJvZHknKTtcblx0XHRjb25zdCBmaWxlRWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKCcuZmlsZScpO1xuXHRcdGNvbnN0IG1lc3NhZ2VUZXh0ID0gbWVzc2FnZUJvZHlFbGVtZW50ID8gbWVzc2FnZUJvZHlFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA6ICcnO1xuXHRcdGNvbnN0IGZpbGVUZXh0ID0gZmlsZUVsZW1lbnQgPyBmaWxlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgOiAnJztcblx0XHRjb25zdCBlcnJvciA9IG1lc3NhZ2VUZXh0ICsgKGZpbGVUZXh0ID8gJyBGaWxlOicgKyBmaWxlVGV4dCA6ICcnKTtcblxuXHRcdHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0dHlwZTogJ2hvcml6b25zLXZpdGUtZXJyb3InLFxuXHRcdFx0ZXJyb3IsXG5cdFx0fSwgJyonKTtcblx0fVxufVxuYDtcblxuY29uc3QgY29uZmlnSG9yaXpvbnNSdW50aW1lRXJyb3JIYW5kbGVyID0gYFxud2luZG93Lm9uZXJyb3IgPSAobWVzc2FnZSwgc291cmNlLCBsaW5lbm8sIGNvbG5vLCBlcnJvck9iaikgPT4ge1xuXHRjb25zdCBlcnJvckRldGFpbHMgPSBlcnJvck9iaiA/IEpTT04uc3RyaW5naWZ5KHtcblx0XHRuYW1lOiBlcnJvck9iai5uYW1lLFxuXHRcdG1lc3NhZ2U6IGVycm9yT2JqLm1lc3NhZ2UsXG5cdFx0c3RhY2s6IGVycm9yT2JqLnN0YWNrLFxuXHRcdHNvdXJjZSxcblx0XHRsaW5lbm8sXG5cdFx0Y29sbm8sXG5cdH0pIDogbnVsbDtcblxuXHR3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcblx0XHR0eXBlOiAnaG9yaXpvbnMtcnVudGltZS1lcnJvcicsXG5cdFx0bWVzc2FnZSxcblx0XHRlcnJvcjogZXJyb3JEZXRhaWxzXG5cdH0sICcqJyk7XG59O1xuYDtcblxuY29uc3QgY29uZmlnSG9yaXpvbnNDb25zb2xlRXJycm9IYW5kbGVyID0gYFxuY29uc3Qgb3JpZ2luYWxDb25zb2xlRXJyb3IgPSBjb25zb2xlLmVycm9yO1xuY29uc29sZS5lcnJvciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0b3JpZ2luYWxDb25zb2xlRXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cblx0bGV0IGVycm9yU3RyaW5nID0gJyc7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYXJnID0gYXJnc1tpXTtcblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGVycm9yU3RyaW5nID0gYXJnLnN0YWNrIHx8IFxcYFxcJHthcmcubmFtZX06IFxcJHthcmcubWVzc2FnZX1cXGA7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZiAoIWVycm9yU3RyaW5nKSB7XG5cdFx0ZXJyb3JTdHJpbmcgPSBhcmdzLm1hcChhcmcgPT4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShhcmcpIDogU3RyaW5nKGFyZykpLmpvaW4oJyAnKTtcblx0fVxuXG5cdHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuXHRcdHR5cGU6ICdob3Jpem9ucy1jb25zb2xlLWVycm9yJyxcblx0XHRlcnJvcjogZXJyb3JTdHJpbmdcblx0fSwgJyonKTtcbn07XG5gO1xuXG5jb25zdCBjb25maWdXaW5kb3dGZXRjaE1vbmtleVBhdGNoID0gYFxuY29uc3Qgb3JpZ2luYWxGZXRjaCA9IHdpbmRvdy5mZXRjaDtcblxud2luZG93LmZldGNoID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRjb25zdCB1cmwgPSBhcmdzWzBdIGluc3RhbmNlb2YgUmVxdWVzdCA/IGFyZ3NbMF0udXJsIDogYXJnc1swXTtcblxuXHQvLyBTa2lwIFdlYlNvY2tldCBVUkxzXG5cdGlmICh1cmwuc3RhcnRzV2l0aCgnd3M6JykgfHwgdXJsLnN0YXJ0c1dpdGgoJ3dzczonKSkge1xuXHRcdHJldHVybiBvcmlnaW5hbEZldGNoLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIG9yaWdpbmFsRmV0Y2guYXBwbHkodGhpcywgYXJncylcblx0XHQudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSB8fCAnJztcblxuXHRcdFx0Ly8gRXhjbHVkZSBIVE1MIGRvY3VtZW50IHJlc3BvbnNlc1xuXHRcdFx0Y29uc3QgaXNEb2N1bWVudFJlc3BvbnNlID1cblx0XHRcdFx0Y29udGVudFR5cGUuaW5jbHVkZXMoJ3RleHQvaHRtbCcpIHx8XG5cdFx0XHRcdGNvbnRlbnRUeXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi94aHRtbCt4bWwnKTtcblxuXHRcdFx0aWYgKCFyZXNwb25zZS5vayAmJiAhaXNEb2N1bWVudFJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2VDbG9uZSA9IHJlc3BvbnNlLmNsb25lKCk7XG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JGcm9tUmVzID0gYXdhaXQgcmVzcG9uc2VDbG9uZS50ZXh0KCk7XG5cdFx0XHRcdFx0Y29uc3QgcmVxdWVzdFVybCA9IHJlc3BvbnNlLnVybDtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFxcYEZldGNoIGVycm9yIGZyb20gXFwke3JlcXVlc3RVcmx9OiBcXCR7ZXJyb3JGcm9tUmVzfVxcYCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9KVxuXHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRpZiAoIXVybC5tYXRjaCgvXFwuaHRtbD8kL2kpKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9KTtcbn07XG5gO1xuXG5jb25zdCBjb25maWdOYXZpZ2F0aW9uSGFuZGxlciA9IGBcbmlmICh3aW5kb3cubmF2aWdhdGlvbiAmJiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcCkge1xuXHR3aW5kb3cubmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKCduYXZpZ2F0ZScsIChldmVudCkgPT4ge1xuXHRcdGNvbnN0IHVybCA9IGV2ZW50LmRlc3RpbmF0aW9uLnVybDtcblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkZXN0aW5hdGlvblVybCA9IG5ldyBVUkwodXJsKTtcblx0XHRcdGNvbnN0IGRlc3RpbmF0aW9uT3JpZ2luID0gZGVzdGluYXRpb25Vcmwub3JpZ2luO1xuXHRcdFx0Y29uc3QgY3VycmVudE9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG5cblx0XHRcdGlmIChkZXN0aW5hdGlvbk9yaWdpbiA9PT0gY3VycmVudE9yaWdpbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcblx0XHRcdHR5cGU6ICdob3Jpem9ucy1uYXZpZ2F0aW9uLWVycm9yJyxcblx0XHRcdHVybCxcblx0XHR9LCAnKicpO1xuXHR9KTtcbn1cbmA7XG5cbmNvbnN0IGFkZFRyYW5zZm9ybUluZGV4SHRtbCA9IHtcblx0bmFtZTogJ2FkZC10cmFuc2Zvcm0taW5kZXgtaHRtbCcsXG5cdHRyYW5zZm9ybUluZGV4SHRtbChodG1sKSB7XG5cdFx0Y29uc3QgdGFncyA9IFtcblx0XHRcdHtcblx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0YXR0cnM6IHsgdHlwZTogJ21vZHVsZScgfSxcblx0XHRcdFx0Y2hpbGRyZW46IGNvbmZpZ0hvcml6b25zUnVudGltZUVycm9ySGFuZGxlcixcblx0XHRcdFx0aW5qZWN0VG86ICdoZWFkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRhZzogJ3NjcmlwdCcsXG5cdFx0XHRcdGF0dHJzOiB7IHR5cGU6ICdtb2R1bGUnIH0sXG5cdFx0XHRcdGNoaWxkcmVuOiBjb25maWdIb3Jpem9uc1ZpdGVFcnJvckhhbmRsZXIsXG5cdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRjaGlsZHJlbjogY29uZmlnSG9yaXpvbnNDb25zb2xlRXJycm9IYW5kbGVyLFxuXHRcdFx0XHRpbmplY3RUbzogJ2hlYWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0YXR0cnM6IHsgdHlwZTogJ21vZHVsZScgfSxcblx0XHRcdFx0Y2hpbGRyZW46IGNvbmZpZ1dpbmRvd0ZldGNoTW9ua2V5UGF0Y2gsXG5cdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRjaGlsZHJlbjogY29uZmlnTmF2aWdhdGlvbkhhbmRsZXIsXG5cdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHR9LFxuXHRcdF07XG5cblx0XHRpZiAoIWlzRGV2ICYmIHByb2Nlc3MuZW52LlRFTVBMQVRFX0JBTk5FUl9TQ1JJUFRfVVJMICYmIHByb2Nlc3MuZW52LlRFTVBMQVRFX1JFRElSRUNUX1VSTCkge1xuXHRcdFx0dGFncy5wdXNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0XHRhdHRyczoge1xuXHRcdFx0XHRcdFx0c3JjOiBwcm9jZXNzLmVudi5URU1QTEFURV9CQU5ORVJfU0NSSVBUX1VSTCxcblx0XHRcdFx0XHRcdCd0ZW1wbGF0ZS1yZWRpcmVjdC11cmwnOiBwcm9jZXNzLmVudi5URU1QTEFURV9SRURJUkVDVF9VUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRpbmplY3RUbzogJ2hlYWQnLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRodG1sLFxuXHRcdFx0dGFncyxcblx0XHR9O1xuXHR9LFxufTtcblxuY29uc29sZS53YXJuID0gKCkgPT4ge307XG5cbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpO1xuY29uc3QgbG9nZ2VyRXJyb3IgPSBsb2dnZXIuZXJyb3I7XG5cbmxvZ2dlci5lcnJvciA9IChtc2csIG9wdGlvbnMpID0+IHtcblx0aWYgKG9wdGlvbnM/LmVycm9yPy50b1N0cmluZygpLmluY2x1ZGVzKCdDc3NTeW50YXhFcnJvcjogW3Bvc3Rjc3NdJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0bG9nZ2VyRXJyb3IobXNnLCBvcHRpb25zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdGJhc2U6ICcvJyxcblx0Y3VzdG9tTG9nZ2VyOiBsb2dnZXIsXG5cdHBsdWdpbnM6IFtcblx0XHRyZWFjdCgpLFxuXHRcdGFkZFRyYW5zZm9ybUluZGV4SHRtbFxuXHRdLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiAzMDAwLFxuXHRcdGhvc3Q6ICdsb2NhbGhvc3QnLFxuXHRcdGNvcnM6IHRydWUsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knOiAnY3JlZGVudGlhbGxlc3MnLFxuXHRcdH0sXG5cdFx0YWxsb3dlZEhvc3RzOiB0cnVlLFxuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0ZXh0ZW5zaW9uczogWycuanN4JywgJy5qcycsICcudHN4JywgJy50cycsICcuanNvbiddLFxuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuXHRcdH0sXG5cdH0sXG5cdGJ1aWxkOiB7XG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0ZXh0ZXJuYWw6IFtcblx0XHRcdFx0J0BiYWJlbC9wYXJzZXInLFxuXHRcdFx0XHQnQGJhYmVsL3RyYXZlcnNlJyxcblx0XHRcdFx0J0BiYWJlbC9nZW5lcmF0b3InLFxuXHRcdFx0XHQnQGJhYmVsL3R5cGVzJ1xuXHRcdFx0XVxuXHRcdH0sXG5cdFx0Y29weVB1YmxpY0RpcjogdHJ1ZVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFQsT0FBTyxVQUFVO0FBQy9VLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsb0JBQW9CO0FBRjNDLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sUUFBUSxRQUFRLElBQUksYUFBYTtBQUV2QyxJQUFNLGlDQUFpQztB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
