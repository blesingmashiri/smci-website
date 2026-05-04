import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Filter, Mail, Phone, MessageCircle, Send, HelpCircle, ShoppingBag } from 'lucide-react';
import QuoteCart from '../components/QuoteCart';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

type CategoryStructure = {
  [key: string]: string[] | {
    [key: string]: string[] | null
  } | null;
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);
  const [isQuoteCartOpen, setIsQuoteCartOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Hierarchical categories structure
  const categoryStructure: CategoryStructure = {
    'All': null,
    'Printers': ['Image Prograf', 'Printers', 'Scanners', 'Inks and Toners', 'Ribbons'],
    'Accessories': null,
    'Adapters': ['Extenders', 'Splitters', 'Others'],
    'Audio Devices': ['Ear Phones', 'Gaming', 'HeadPhones', 'Speakers'],
    'Calculators': null,
    'Computers': {
      'Desktops': ['Accessories', 'All in One', 'CPUs', 'Monitors'],
      'Laptops': null,
      'Servers': ['Accessories', 'Dell', 'HP']
    },
    'Interactive boards': null,
    'Laminators': null,
    'Money Counter': null,
    'Networking': ['Access Points', 'Cabinets', 'Cables', 'Fibre', 'Mikrotik', 'Range Extenders', 'Routers', 'Switches', 'Tools and Accessories', 'Wireless Adapters'],
    'Photography': ['Camera and Lenses', 'Selphy Printers'],
    'Storage': {
      'CD DVD Recordables': null,
      'Flash Drives': null,
      'Internal Drives': ['Hard Drives', 'SSD Drives'],
      'External Drives': ['Case', 'Hard Drives', 'Solid State Drives'],
      'SD Cards': null
    },
    'Tables and Cellphones': ['Power Banks', 'Redmi', 'Samsung', 'Tecno'],
    'TVs and Sound Bars': null,
    'Video Conferencing': ['Conferencing System', 'WebCam'],
    'Anti Virus Software': null,
    'Cables': ['HDMI', 'OTHER', 'VGA'],
    'CCTV': {
      'Access Control': null,
      'Dahua Recorders': null,
      'HikVision Cameras': ['Analogue Cameras', 'IP Cameras'],
      'Intercoms': null,
      'Dahua Cameras': ['Analogue Cameras'],
      'Hard Drives': null,
      'HikVision Recorders': ['HikVision DVR', 'HikVision NVR']
    },
    'Desk Phones': ['Analogue Phones', 'PABX', 'Volp Phones'],
    'Keyboards and Mice': null,
    'Microsoft': null,
    'Money Detector': null,
    'Office Equipment': ['Paper Shredder'],
    'POS Equipment': ['Cash Boxes', 'Cash Drawers', 'POS Machines', 'POS Printers', 'POS Scanners'],
    'Projectors': ['Mounts', 'Presenters', 'Projectors', 'Screens'],
    'Tablets': null,
    'UPS and Protectors': ['Surge Protectors', 'UPS'],
    'Watches': null
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // SMCI products
  const products: Product[] = [
    { id: 1, name: 'HP ProBook 450', category: 'Computers - Laptops', price: '$850', image: '/images/shop/hp-probook-450.jpeg' },
    { id: 2, name: 'Dell Vostro Tower', category: 'Computers - Desktops', price: '$720', image: '/images/shop/dell-vostro-tower.jpeg' },
    { id: 3, name: 'Epson EcoTank L3150', category: 'Printers', price: '$250', image: '/images/shop/epson-ecotank.jpeg' },
    { id: 4, name: 'Logitech Wireless Mouse', category: 'Accessories', price: '$25', image: '/images/shop/logitech-mouse.jpeg' },
    { id: 5, name: 'Lenovo ThinkPad E14', category: 'Computers - Laptops', price: '$950', image: '/images/shop/lenovo-thinkpad.jpeg' },
    { id: 6, name: 'Canon ImageRUNNER', category: 'Printers', price: '$1200', image: '/images/shop/canon-imagerunner.jpeg' },
    { id: 7, name: 'Samsung 24" Monitor', category: 'Accessories', price: '$180', image: '/images/shop/samsung-monitor.jpeg' },
    { id: 8, name: 'HP EliteDesk 800', category: 'Computers - Desktops', price: '$890', image: '/images/shop/hp-elitedesk.jpeg' },
    { id: 9, name: 'Logitech Bluetooth Audio Adapter', category: 'Adapters', price: '$35', image: '/images/shop/logitech-bluetooth-audio-adapter.jpeg' },
    { id: 10, name: 'S-tek HDMI Female Adapter', category: 'Adapters', price: '$15', image: '/images/shop/S-tek-hdmi-female-adapter.jpeg' },
    { id: 11, name: 'HDMI 4K 120m Extender', category: 'Adapters - Extenders', price: '$120', image: '/images/shop/Hdmi-4K-120M-kvm-extender.jpeg' },
    { id: 12, name: 'HDMI 60M KVM Extender with Audio', category: 'Adapters - Extenders', price: '$85', image: '/images/shop/Hdmi-60M-kvm-extender-with-audio.jpeg' },
    { id: 13, name: 'HDMI 200M KVM IP Extender', category: 'Adapters - Extenders', price: '$150', image: '/images/shop/Hdmi-200M-kvm-ip-extender.jpeg' },
    { id: 14, name: 'HDMI Extender 60M', category: 'Adapters - Extenders', price: '$95', image: '/images/shop/Hdmi-extender-60M.jpeg' },
    { id: 15, name: 'S-tek HDMI to VGA Verter 4K 60MHz', category: 'Adapters - Extenders', price: '$45', image: '/images/shop/S-tek-hdmi-to-vga-verter4K-60MHz.jpeg' },
    { id: 16, name: 'HDMI RJ Network Extender 30M', category: 'Adapters - Extenders', price: '$110', image: '/images/shop/Hdmi-RJ-network-extender-30M.jpeg' },
    { id: 17, name: 'HDMI Repeater Extender Splitter 4K2K', category: 'Adapters - Extenders', price: '$65', image: '/images/shop/Hdmi-repeater-extender-splitter-4K2K.jpeg' },
    { id: 18, name: 'HDMI Male to Micro HDMI Female', category: 'Adapters - Extenders', price: '$25', image: '/images/shop/Hdmi-male-to-micro-hdmi-female.jpeg' },
    { id: 19, name: 'Volkano HDMI 4Way Splitter 4KUHD', category: 'Adapters - Splitters', price: '$75', image: '/images/shop/Volkano-hdmi-4way-splitter-4KUHD.jpeg' },
    { id: 20, name: 'HDTV Splitter 4Port 4KX2K', category: 'Adapters - Splitters', price: '$85', image: '/images/shop/Hdtv-splitter-4port-4KX2K.jpeg' },
    { id: 21, name: 'HDMI Splitter 8Port 4KX2K UHD 3D', category: 'Adapters - Splitters', price: '$120', image: '/images/shop/Hdmi-splitter-8port-4KX2K-Uhd-3D.jpeg' },
    { id: 22, name: 'S-tek USB Type C OTG 15cm', category: 'Adapters - Others', price: '$20', image: '/images/shop/S-tek-usb-type-CT-B3.0-Otg-15cm.jpeg' },
    { id: 23, name: 'TP-Link 10/100Mbps Media Converter', category: 'Adapters - Others', price: '$35', image: '/images/shop/Tp-link-10-100mbps-edia-converter.jpeg' },
    { id: 24, name: 'Volkano Rush Bluetooth Earphones VK1106', category: 'Audio Devices - Ear Phones', price: '$45', image: '/images/shop/Volkano-rush-bluetooth-earphones-vk1106.jpeg' },
    { id: 25, name: 'Volkano Motion Bluetooth Sports VK-1005Bkgr', category: 'Audio Devices - Ear Phones', price: '$55', image: '/images/shop/Volkano-motion-bluetooth-sports-vk-1005Bkgr.jpeg' },
    { id: 26, name: 'Volkano Earphones with Mic VS203', category: 'Audio Devices - Ear Phones', price: '$25', image: '/images/shop/Volkano-earphones-with-mic-vs203.jpeg' },
    { id: 27, name: 'Volkano Earphones Series VSN202', category: 'Audio Devices - Ear Phones', price: '$30', image: '/images/shop/Volkano-earphones-series-vsn202.jpeg' },
    { id: 28, name: 'Volkano Aquarius Series Earphones', category: 'Audio Devices - Ear Phones', price: '$35', image: '/images/shop/Volkano-aquarius-series-earphones.jpeg' },
    { id: 29, name: 'Polaroid Earphones Grey and Red', category: 'Audio Devices - Ear Phones', price: '$20', image: '/images/shop/Polaroid-earphones-grey-and-red.jpeg' },
    { id: 30, name: 'Polaroid Earphones Blue Black and Gold', category: 'Audio Devices - Ear Phones', price: '$25', image: '/images/shop/Polaroid-earphones-blue-black-and-gold.jpeg' },
    { id: 31, name: 'Polaroid Earphones Blue and Grey', category: 'Audio Devices - Ear Phones', price: '$22', image: '/images/shop/Polaroid-earphones-blue-and-grey.jpeg' },
    { id: 32, name: 'Mitrue Wireless Earbuds Basic2', category: 'Audio Devices - Ear Phones', price: '$40', image: '/images/shop/Mitrue-wireless-earbuds-basic2.jpeg' },
    { id: 33, name: 'Awei T88ANC Wireless Earbuds', category: 'Audio Devices - Ear Phones', price: '$65', image: '/images/shop/Awei-t88anc-wireless-earbuds.jpeg' },
    { id: 34, name: 'Awei OWST93 Wireless Earbuds', category: 'Audio Devices - Ear Phones', price: '$50', image: '/images/shop/Awei-owst93-wireless-earbuds.jpeg' },
    { id: 35, name: 'Awei Earbuds with Screen ANC+ T56', category: 'Audio Devices - Ear Phones', price: '$75', image: '/images/shop/Awei-earbuds-with-screen-anc+enc-t56.jpeg' },
    { id: 36, name: 'Anker A3983 Life Note 3I', category: 'Audio Devices - Ear Phones', price: '$80', image: '/images/shop/Anker-A3983-life-note-3I.jpeg' },
    { id: 37, name: 'Celebrat WD03 Earphones', category: 'Audio Devices - Ear Phones', price: '$18', image: '/images/shop/Celebrat-wd03-earphones.jpeg' },
    { id: 38, name: 'Sharp EL-520W Calculator', category: 'Calculators', price: '$25', image: '/images/shop/Sharp-el520w-calculator.jpeg' },
    { id: 39, name: 'Sharp EL-531WH Calculator', category: 'Calculators', price: '$30', image: '/images/shop/Sharp-el531wh-calculator.jpeg' },
    { id: 40, name: 'Sharp ELW531TH Write View Calculator', category: 'Calculators', price: '$35', image: '/images/shop/Sharp-elw531th-wh-write-view.jpeg' },
    { id: 41, name: 'Volkano 6-in-1 Gaming Microphone', category: 'Audio Devices - Gaming', price: '$45', image: '/images/shop/Volkano-6in-1-gaming- microphone.jpeg' },
    { id: 42, name: 'Volkano 7.1 Surround Song Headphones', category: 'Audio Devices - Gaming', price: '$65', image: '/images/shop/Volkano-7.1- surround-song-headphones.jpeg' },
    { id: 43, name: 'Volkano Gaming Wireless Controller', category: 'Audio Devices - Gaming', price: '$55', image: '/images/shop/Volkano-gaming-wireless-controller.jpeg' },
    { id: 44, name: 'Volkano VX Gaming Keyboard 4in1 Combo', category: 'Audio Devices - Gaming', price: '$75', image: '/images/shop/Volkano-vx-gaming-keyboard-4in1-combo.jpeg' },
    { id: 43, name: 'Celebrat A18 Wireless Headphones Set Extra Bass', category: 'Audio Devices - HeadPhones', price: '$55', image: '/images/shop/Celebrat-A18-wireless-headphone-set-extra-bass.jpeg' },
    { id: 44, name: 'Celebrat ANC A41 Headphones', category: 'Audio Devices - HeadPhones', price: '$75', image: '/images/shop/Celebrat-anc-A41-headphones.jpeg' },
    { id: 45, name: 'Copy of Untitled Design4-1', category: 'Audio Devices - HeadPhones', price: '$40', image: '/images/shop/Copy-of-untitled-design4-1.jpeg' },
    { id: 46, name: 'Awei Home Theater Wireless Speaker Y990', category: 'Audio Devices - Speakers', price: '$120', image: '/images/shop/Awei-home-theater-wireless-speaker-Y990.jpeg' },
    { id: 47, name: 'Awei Wireless Speaker Wproof KA33', category: 'Audio Devices - Speakers', price: '$85', image: '/images/shop/Awei-wireless-speaker-wproof-KA33.jpeg' },
    { id: 48, name: 'Awei Wireless Speaker Wproof Y669', category: 'Audio Devices - Speakers', price: '$95', image: '/images/shop/Awei-wireless-speaker-wproof-Y669.jpeg' },
    { id: 49, name: 'Geforce GTX1050TI 4GB NVIDIA Palit', category: 'Computers - Desktops - Accessories', price: '$180', image: '/images/shop/Geforce-gtx1050ti 4GB, nvidia-palit.jpeg' },
    { id: 50, name: 'Gigabyte GeForce GT710 HDMI DVI D-Sub', category: 'Computers - Desktops - Accessories', price: '$65', image: '/images/shop/Gigabyte-geforce-gt710-hdmi-dvi-d-sub.jpeg' },
    { id: 51, name: 'HP 24" 17-1355 16GB 512SSD Touch Win 11 Pro', category: 'Computers - Desktops - All in One', price: '$850', image: '/images/shop/HP-24-17-1355-16gb-512ssd-touch-win-11pro.jpeg' },
    { id: 52, name: 'HP 24cbi5 1334u 8GB 512SS Touch Win11 Pro', category: 'Computers - Desktops - All in One', price: '$750', image: '/images/shop/HP-24cbi5-1334u-8gb-512ss-touch-win11-pro.jpeg' },
    { id: 53, name: 'HP 24I3 135u 8GB 512SSD Touch 23.8 Win 11 Pro', category: 'Computers - Desktops - All in One', price: '$780', image: '/images/shop/HP-24I3-135u-8gb-512ssd-touch-23.8-win-11pro.jpeg' },
    { id: 54, name: 'Dell Optiplex 7010 15" 8GB 512SSD Win 11 Pro', category: 'Computers - Desktops - CPUs', price: '$680', image: '/images/shop/Dell-optiplex-701015-8gb-512ssd-win-11pro.jpeg' },
    { id: 55, name: 'HP 290 G4 MT', category: 'Computers - Desktops - CPUs', price: '$520', image: '/images/shop/HP-290-g4-mt.jpeg' },
    { id: 56, name: 'HP Desktop 290I7 112700 16GB 512GB W11 Pro', category: 'Computers - Desktops - CPUs', price: '$750', image: '/images/shop/HP-desktop-.290I7-112700-16-b512gb-w11-pro.jpeg' },
    { id: 57, name: 'Dell 20" E202Oh Monitor', category: 'Computers - Desktops - Monitors', price: '$150', image: '/images/shop/Dell-20-e202Oh-monitor.jpeg.jpeg' },
    { id: 58, name: 'Dell 24" HDMI VGA SE2422H Monitor', category: 'Computers - Desktops - Monitors', price: '$220', image: '/images/shop/Dell-24-inch-hdmi-vga-se2422h-monitor.jpeg' },
    { id: 59, name: 'Dell 27" Monitor SE2722 HDMI Port', category: 'Computers - Desktops - Monitors', price: '$320', image: '/images/shop/Dell-27-monitor-se2722-hdmiport.jpeg' },
    { id: 60, name: 'Harddrive Caddy 3.5" 4TB-8TB SATA', category: 'Computers - Servers - Accessories', price: '$45', image: '/images/shop/Harddrive-caddy-3.5-4tb-8tb-sata.jpeg' },
    { id: 61, name: 'Dell PE R350 8GB 4TB E-2314 Server', category: 'Computers - Servers - Dell', price: '$1,250', image: '/images/shop/Dell-pe-r350-8gb-4tb-e-2314-server.jpeg' },
    { id: 62, name: 'HP ML 110 Gen10 4208 16GB 1TB HDD', category: 'Computers - Servers - HP', price: '$980', image: '/images/shop/HP-ml-110-gen10-4208-16gb-1tb-hdd.jpeg' },
    { id: 63, name: 'Hikvision DSD5C98RB-B', category: 'Interactive boards', price: '$2,150', image: '/images/shop/Hikvision-dsd5c98rb-b.jpeg' },
    { id: 64, name: 'Hikvision Interactive 75 Inches 4K', category: 'Interactive boards', price: '$3,200', image: '/images/shop/Hikvision-interactive-75inches-4k.jpeg' },
    { id: 65, name: 'Fellowes Lunar A3 Laminator', category: 'Laminators', price: '$280', image: '/images/shop/Fellowes-lunar-A3-laminator.jpeg' },
    { id: 66, name: 'Gicom A3 Laminator A235H', category: 'Laminators', price: '$320', image: '/images/shop/Gicom-A3-laminator-A235h.jpeg' },
    { id: 67, name: 'Avansa Blitz Count M260 with UV Ultra', category: 'Money Counter', price: '$450', image: '/images/shop/Avansa-blitz-count-m260-with-uv-ultra.jpeg' },
    { id: 68, name: 'Avansa Light Count M210 Notes 1000 Notes', category: 'Money Counter', price: '$380', image: '/images/shop/Avansa-light-count-m210-notes-1000notes.jpeg' },
    { id: 69, name: 'ESET NOD32 2 User Antivirus', category: 'Anti Virus Software', price: '$65', image: '/images/shop/Eset-nod-32-2-user-antivirus.jpeg' },
    { id: 70, name: '4MP 4mm ColorVu Smart Hybrid Light Fixed Camera', category: 'CCTV - HikVision Cameras', price: '$180', image: '/images/shop/4mp4mm-colorvu-smart-hybrid-light-fixed.jpeg' },
    { id: 71, name: 'Hikvision 2MP Smart Hybrid Dome Camera', category: 'CCTV - HikVision Cameras', price: '$150', image: '/images/shop/Hikvision-2mp-smart-hybrid-dome-camer.jpeg' },
    { id: 72, name: 'Dahua 2.8mm 4MP WDR Bullet Camera', category: 'CCTV - Dahua Cameras', price: '$160', image: '/images/shop/Dahua-2.8mm-4mp-wdr-bullet-camera.jpeg' },
    { id: 73, name: 'Dahua 2MP Entry Bullet Net Camera', category: 'CCTV - Dahua Cameras', price: '$140', image: '/images/shop/Dahua-2mp-entry-bullet-net.jpeg' },
    { id: 74, name: 'External Harddrive QNA Dualcore 1.7', category: 'CCTV - Hard Drives', price: '$220', image: '/images/shop/External-harddrive-qna-dualcore-1.7.jpeg' },
    { id: 75, name: 'Harddrive 8TB Purple Surveillance', category: 'CCTV - Hard Drives', price: '$280', image: '/images/shop/Harddrive-8tb-purple-surveilance-wd.jpeg' },
    { id: 76, name: 'HikVision Acusense DVR 8CH 1HDD', category: 'CCTV - HikVision Recorders - HikVision DVR', price: '$450', image: '/images/shop/HikVision-acusense-dvr-8ch-1hdd.jpeg' },
    { id: 77, name: 'HikVision Digital Video Recorder H.265 UPTO 8MP', category: 'CCTV - HikVision Recorders - HikVision DVR', price: '$520', image: '/images/shop/HikVision-digital-video-recoder-h.265-upto-8mp.jpeg' },
    { id: 78, name: 'Dahua Network Video Recorder HI NVR5432 EI', category: 'CCTV - HikVision Recorders - HikVision NVR', price: '$680', image: '/images/shop/Dahua-network-video-recorder-hi-nvr5432-ei.jpeg' },
    { id: 79, name: 'Hikvision 64 Channel 2U 9664NI M8 NII8', category: 'CCTV - HikVision Recorders - HikVision NVR', price: '$850', image: '/images/shop/Hikvision-64-channel-2u-9664ni-m8-nii8.jpeg' },
    { id: 80, name: 'HDMI to HDMI 20m', category: 'Cables - HDMI', price: '$25', image: '/images/shop/HDMI-to-HDMI-20m.jpeg' },
    { id: 81, name: 'HDMI Cable 10 Metres', category: 'Cables - HDMI', price: '$18', image: '/images/shop/HDMI-cable-10metres.jpeg' },
    { id: 82, name: 'Volkano Iron Route MFI Lightning', category: 'Cables - OTHER', price: '$22', image: '/images/shop/Volkano-iron-series-route-mfi-lightning.jpeg' },
    { id: 83, name: 'VGA 20m', category: 'Cables - VGA', price: '$15', image: '/images/shop/VGA-20m.jpeg' },
    { id: 84, name: 'VGA Cable 1.5m to 15pin', category: 'Cables - VGA', price: '$8', image: '/images/shop/VGA-cable-1.5m-to-15pin.jpeg' },
    { id: 85, name: 'Logitech Rally Plus 960 001242', category: 'Video Conferencing - Conferencing System', price: '$450', image: '/images/shop/Logitec-rally-plus-960-001242.jpeg' },
    { id: 86, name: 'Logitech BCC950 Conference Cam', category: 'Video Conferencing - Conferencing System', price: '$320', image: '/images/shop/Logitech-bcc950-conference-cam.jpeg' },
    { id: 87, name: 'Logitech Expansion Micro 989 000171', category: 'Video Conferencing - Conferencing System', price: '$180', image: '/images/shop/Logitech-expansion-micro-989-000171.jpeg' },
    { id: 88, name: 'Logitech Brio 105HD Webcam 1080p', category: 'Video Conferencing - WebCam', price: '$120', image: '/images/shop/Logitech-brio-105hd-webcam-1080p.jpeg' },
    { id: 89, name: 'Logitech C505e HD 720p', category: 'Video Conferencing - WebCam', price: '$80', image: '/images/shop/Logitech-c505e-hd-720p.jpeg' },
    { id: 90, name: 'Logitech C920e HD Webcam 1080p', category: 'Video Conferencing - WebCam', price: '$95', image: '/images/shop/Logitech-c920e-hd-webcam-1080p.jpeg' },
    { id: 91, name: 'Awei Home Theater Wireless Speaker Y990', category: 'TVs and Sound Bars', price: '$65', image: '/images/shop/Awei-home-theater-wireless-speaker-Y990.jpeg' },
    { id: 92, name: 'Hisense 55A62KS UHD LED Smart TV 55inch', category: 'TVs and Sound Bars', price: '$850', image: '/images/shop/Hisense-55a62ks-uhd-led-mart-tv-55inch.jpeg' },
    { id: 93, name: 'Hisense 58A6 IK 4K UHD Smart LED TV 58inch', category: 'TVs and Sound Bars', price: '$950', image: '/images/shop/Hisense-58a6-ik-4k-uhd-smart-led-tv-58inch.jpeg' },
    { id: 94, name: 'CD-R Verbatim 52x 700MB Extra Protection M43437', category: 'Storage - CD DVD Recordables', price: '$12', image: '/images/shop/CD-R-verbatim-52x-700mb-exra-protection-m43437.jpeg' },
    { id: 95, name: 'DVD-R My Media 4.7GB 120MB 50pack Printables', category: 'Storage - CD DVD Recordables', price: '$25', image: '/images/shop/DVD-R-my-media-4.7gb-120mb-50pack-printable.jpeg' },
    { id: 96, name: 'External Western Digital Case', category: 'Storage - External Drives - Case', price: '$35', image: '/images/shop/External-western-digital-case.jpeg' },
    { id: 97, name: 'External Harddrive 1TB USB3 Verbatim', category: 'Storage - External Drives - Hard Drives', price: '$65', image: '/images/shop/External-harddrive-1tb-usb3-vertbatim.jpeg' },
    { id: 98, name: 'External Harddrive 1TB USB3.2gen1', category: 'Storage - External Drives - Hard Drives', price: '$75', image: '/images/shop/External-harddrive-1tb-usb3.2gen1.jpeg' },
    { id: 99, name: 'External Harddrive 1TB Verbatim 53112', category: 'Storage - External Drives - Hard Drives', price: '$70', image: '/images/shop/External-harddrive-1tb-vertbatim-53112.jpeg' },
    { id: 100, name: 'External 500GB SSD Crucial X6 Portable', category: 'Storage - External Drives - Solid State Drives', price: '$85', image: '/images/shop/External-500gbssd-crucial-x6-portable.jpeg' },
    { id: 101, name: 'External SSD 256GB ADATA SD700 USB3.1', category: 'Storage - External Drives - Solid State Drives', price: '$65', image: '/images/shop/External-ssd-256gb-adata-sd700-usb3.1.jpeg' },
    { id: 102, name: 'External SSD 512GB ET Pocket 100 Hiker', category: 'Storage - External Drives - Solid State Drives', price: '$95', image: '/images/shop/External-ssd512gb-et-pocket-100-hiker.jpeg' },
    { id: 103, name: 'Micro SD 8GB Neo Hiksemi', category: 'Storage - SD Cards', price: '$12', image: '/images/shop/Micro-sd-8gb-neo-hiksemi.jpeg' },
    { id: 104, name: 'Micro SD 16GB Sandisk Camera', category: 'Storage - SD Cards', price: '$18', image: '/images/shop/Micro-sd-16gb-sanddisk-camera.jpeg' },
    { id: 105, name: 'Micro SD 16GB Sandisk', category: 'Storage - SD Cards', price: '$15', image: '/images/shop/Micro-sd-16gb-sanddisk.jpeg' },
    { id: 106, name: 'Micro SD 16GB Verbatim Camera', category: 'Storage - SD Cards', price: '$16', image: '/images/shop/Micro-sd-16gb-verbatim-camera.jpeg' },
    { id: 107, name: 'Micro SD 16GB Verbatim', category: 'Storage - SD Cards', price: '$14', image: '/images/shop/Micro-sd-16gb-verbatim.jpeg' },
    { id: 108, name: 'Harddrive Desktop 8TB SATA HDD 3.5', category: 'Storage - Internal Drives - Hard Drives', price: '$180', image: '/images/shop/Harddrive-desktop-8tb-sata-hdd-3.5.jpeg' },
    { id: 109, name: 'Harddrive Desktop SATA 4TB', category: 'Storage - Internal Drives - Hard Drives', price: '$120', image: '/images/shop/Harddrive-desktop-sata-4tb.jpeg' },
    { id: 110, name: 'Harddrive SSD 500GB M2 Crucial', category: 'Storage - Internal Drives - SSD Drives', price: '$65', image: '/images/shop/Harddrive-ssd500gb-m2-crucial.jpeg' },
    { id: 111, name: 'Flash 32GB Micro USB Sanddisk OTG', category: 'Storage - Flash Drives', price: '$18', image: '/images/shop/Flash-32gb-micro-usb-sanddisk-otg.jpeg' },
    { id: 112, name: 'Flash Drive 32GB 3.2gen1 Dual Drive D300', category: 'Storage - Flash Drives', price: '$22', image: '/images/shop/Flash-drive-32gb-3.2gen1-dual-drive-d300.jpeg' },
    { id: 113, name: 'Flash Drive 32GB 3.2gen1 Dual Dual Drive D400', category: 'Storage - Flash Drives', price: '$25', image: '/images/shop/Flash-drive-32gb-3.2gen1-dual-dual-drive-d400.jpeg' },
    { id: 114, name: 'Canon 4K Camcorder XA65 EMEA', category: 'Photography - Camera and Lenses', price: '$1,850', image: '/images/shop/Canon-4k-camcorder-xa65-emea.jpeg' },
    { id: 115, name: 'Canon Camera EOS2000D 18-55+Bag', category: 'Photography - Camera and Lenses', price: '$650', image: '/images/shop/Canon-camera-eos2000d-18-55+bag.jpeg' },
    { id: 116, name: 'Canon Camera EOSR7 F35 6.3IS Kit', category: 'Photography - Camera and Lenses', price: '$1,200', image: '/images/shop/Canon-camera-eosr7-f35-6.3is-kit.jpeg' },
    { id: 117, name: 'Canon KP108IN Ink & Paper Selphy Printer Card Size (108p)', category: 'Photography - Selphy Printers', price: '$45', image: '/images/shop/Canon-kp108in-ink-&-paper-selphyprinter-card-size-(108p).jpeg' },
    { id: 118, name: 'Canon Selphy CP 1300 Photo Printer', category: 'Photography - Selphy Printers', price: '$180', image: '/images/shop/Canon-selphy-cp-1300-photo-printer.jpeg' },
    { id: 119, name: 'Canon Selphy CP100 Printer + KP36', category: 'Photography - Selphy Printers', price: '$150', image: '/images/shop/Canon-selphy-cp100-printer+kp36.jpeg' },
    { id: 120, name: 'Cisco Access Point WAP 121 E K9', category: 'Networking - Access Points', price: '$220', image: '/images/shop/Cisco-access-point-wap-121-e-k9.jpeg' },
    { id: 121, name: 'Cisco Access Point WAP 131 E K9', category: 'Networking - Access Points', price: '$280', image: '/images/shop/Cisco-access-point-wap-131-e-k9.jpeg' },
    { id: 70, name: 'Amplify-compete-series-face-watch-with-hrm', category: 'Watches', price: '$120', image: '/images/shop/Amplify-compete-series-face-watch-with-hrm.jpeg' },
    { id: 71, name: 'Amplify-kids-activity-2gl-watch', category: 'Watches', price: '$85', image: '/images/shop/Amplify-kids-activity-2gl-watch.jpeg' },
    { id: 72, name: 'APC Surge Protector', category: 'UPS and Protectors - Surge Protectors', price: '$45', image: '/images/shop/Apc-surge-protector.jpeg' },
    { id: 73, name: 'APC Surge with No Phone Square', category: 'UPS and Protectors - Surge Protectors', price: '$55', image: '/images/shop/Apc-surge-with-no-phone-square.jpeg' },
    { id: 74, name: 'APC Back-UPS 950VA 480W VR IEC Sockets', category: 'UPS and Protectors - UPS', price: '$180', image: '/images/shop/Apc-back-ups-950va-480w-vr-iec-sockets.jpeg' },
    { id: 75, name: 'APC Back-UPS 1200VA 650VR IEC Sockets', category: 'UPS and Protectors - UPS', price: '$250', image: '/images/shop/Apc-back-ups-1200va,650vr-iec-sockets.jpeg' },
    { id: 76, name: 'Amplify Pro Spark Series Werbank Powerbank', category: 'Tables and Cellphones - Power Banks', price: '$35', image: '/images/shop/Amplify-pro-spark-series-werbank-powerbank.jpeg' },
    { id: 77, name: 'Celebrat 22.5W Powerbank Fast Charge', category: 'Tables and Cellphones - Power Banks', price: '$45', image: '/images/shop/Celebrat-22.5w-powerbank-fast-charge.jpeg' },
    { id: 78, name: 'Xiaomi Redmi 12 8GB 256GB Storage', category: 'Tables and Cellphones - Redmi', price: '$280', image: '/images/shop/Xiaomi-redmi-12,8g,256gb-storage.jpeg' },
    { id: 79, name: 'Xiaomi Redmi 13 8GB 256GB ROM Phone', category: 'Tables and Cellphones - Redmi', price: '$320', image: '/images/shop/Xiaomi-redmi-13-8gb-256gb-rom-phone.jpeg' },
    { id: 80, name: 'Samsung Galaxy A04 Mobile Phone', category: 'Tables and Cellphones - Samsung', price: '$180', image: '/images/shop/Samsung-galaxy-a04-mobile-phone.jpeg' },
    { id: 81, name: 'Samsung Galaxy A15 4GB 128GB', category: 'Tables and Cellphones - Samsung', price: '$250', image: '/images/shop/Samsung-galaxy-a15-4gb-128gb.jpeg' },
    { id: 82, name: 'Tecno Camon 30Pro 5G 12GB RAM 50MP', category: 'Tables and Cellphones - Tecno', price: '$380', image: '/images/shop/Tecno-camon-30pro-5g-12gbram-50mp.jpeg' },
    { id: 83, name: 'Tecno Camon 30S 128GB Ext 6GB Phone', category: 'Tables and Cellphones - Tecno', price: '$320', image: '/images/shop/Tecno-camon-30S-128gb-ext6gb-phone.jpeg' },
    { id: 84, name: 'Projector Ceiling Mount Box BB50100', category: 'Projectors - Mounts', price: '$65', image: '/images/shop/Projector-ceiling-mount-box-bb50100.jpeg' },
    { id: 85, name: 'Projector Mount APM4365', category: 'Projectors - Mounts', price: '$85', image: '/images/shop/Projector-mount-apm4365.jpeg' },
    { id: 86, name: 'HP SS10 Wireless Presentation Flip Pen', category: 'Projectors - Presenters', price: '$75', image: '/images/shop/HP- ss10-wireless-presentation-flip-pen.jpeg' },
    { id: 87, name: 'Logitech Wireless Presenter', category: 'Projectors - Presenters', price: '$95', image: '/images/shop/Logitech-wireless-presenter.jpeg' },
    { id: 88, name: 'Acer Video Projector X1226AH', category: 'Projectors - Projectors', price: '$450', image: '/images/shop/Acer-video-projector-x1226ah.jpeg' },
    { id: 89, name: 'Epson COWX02 3000 Lumen Projector', category: 'Projectors - Projectors', price: '$650', image: '/images/shop/Epson-cowx02-3000lumen-projector.jpeg' },
    { id: 90, name: 'Projector Screen I View Automatic 180 by 180', category: 'Projectors - Screens', price: '$280', image: '/images/shop/Projector-screen-I-view-automatic-180-by-180.jpeg' },
    { id: 91, name: 'Projector Screen Portable 2m by 1.5m', category: 'Projectors - Screens', price: '$220', image: '/images/shop/Projector-screen-portable-2m-by-1.5m.jpeg' },
    { id: 92, name: 'Cashbox 8inch C-200M5 Treeline', category: 'POS Equipment - Cash Boxes', price: '$85', image: '/images/shop/Cashbox-8inch-c-200m5-treeline.jpeg' },
    { id: 93, name: 'Cashbox 10inch C-250M5 Treeline', category: 'POS Equipment - Cash Boxes', price: '$95', image: '/images/shop/Cashbox-10inch-c-250m5-treeline.jpeg' },
    { id: 94, name: 'Cashbox 12inch C-300M5 Treeline', category: 'POS Equipment - Cash Boxes', price: '$110', image: '/images/shop/Cashbox-12inch-c-300m5-treeline.jpeg' },
    { id: 95, name: 'Cash Drawer 5 Note 24V IR400AS', category: 'POS Equipment - Cash Drawers', price: '$120', image: '/images/shop/Cash-drawer-5note-24v-ir400as.jpeg' },
    { id: 96, name: 'Cash Drawer Pinnpos CM 5 Bills Coins', category: 'POS Equipment - Cash Drawers', price: '$135', image: '/images/shop/Cash-drawer-pinnpos-cm-5bills-coins.jpeg' },
    { id: 97, name: 'Cash Drawer', category: 'POS Equipment - Cash Drawers', price: '$95', image: '/images/shop/Cash-drawer.jpeg' },
    { id: 98, name: 'Pinnpos 15inch Touch 4GB 64GB MSAT', category: 'POS Equipment - POS Machines', price: '$850', image: '/images/shop/Pinnpos-15inch-touch-4gb-64gb-msat.jpeg' },
    { id: 99, name: 'Poslab 20x2 Line VFD S232 Interface', category: 'POS Equipment - POS Machines', price: '$180', image: '/images/shop/Poslab-20x2-line-vfd-s232-interface.jpeg' },
    { id: 100, name: 'Poslab 20x2 Line VFD USB Interface', category: 'POS Equipment - POS Machines', price: '$195', image: '/images/shop/Poslab-20x2-line-vfd-usb-interface.jpeg' },
    { id: 101, name: 'Poslab Mini Receipt Thermal Printer', category: 'POS Equipment - POS Printers', price: '$150', image: '/images/shop/Poslab-mini-receipt-thermal-printer.jpeg' },
    { id: 102, name: 'Proline Thermal Receipt Printer USB+Serial', category: 'POS Equipment - POS Printers', price: '$175', image: '/images/shop/Proline-thermal-receipt-printer-usb+serial.jpeg' },
    { id: 103, name: 'Epson TM-T20III Thermal 10110035-51011', category: 'POS Equipment - POS Printers', price: '$220', image: '/images/shop/Epson-tm-t20III-thermal-10110035-51011.jpeg' },
    { id: 104, name: 'Newland Handheld Barcode Scanner HR-1250-70', category: 'POS Equipment - POS Scanners', price: '$125', image: '/images/shop/Newland-handheld-barcode-scanner-hr-1250-70.jpeg' },
    { id: 105, name: 'Newland NLS HR10 Handheld Barcode Scanner', category: 'POS Equipment - POS Scanners', price: '$95', image: '/images/shop/Newland-nls-hr10-handheld-barcode-scanner.jpeg' },
    { id: 106, name: 'Newland NLS HR32 Handheld Barcode Scanner', category: 'POS Equipment - POS Scanners', price: '$145', image: '/images/shop/Newland-nls-hr32-handheld-barcode-scanner.jpeg' },
    { id: 107, name: 'M&G Shredder Machine 16L 96702', category: 'Office Equipment - Paper Shredder', price: '$180', image: '/images/shop/M&G-shredder-machine-16l-96702.jpeg' },
    { id: 108, name: 'Shredder Fellowes CRC 46336 90sheets', category: 'Office Equipment - Paper Shredder', price: '$250', image: '/images/shop/Shredder-fellowes-crc-46336-90sheets.jpeg' },
    { id: 109, name: 'Shredder Oil', category: 'Office Equipment - Paper Shredder', price: '$25', image: '/images/shop/shredder-oil.jpeg' },
    { id: 110, name: 'Avansa Counterfeit Detector Pen M006', category: 'Money Detector', price: '$15', image: '/images/shop/Avansa-counterfeit-detector-pen-m006.jpeg' },
    { id: 111, name: 'Nigachi N6020 Money Detector', category: 'Money Detector', price: '$85', image: '/images/shop/Nigachi-n6020-money-detector.jpeg' },
    { id: 112, name: 'Microsoft Office 365 Personal', category: 'Microsoft', price: '$70', image: '/images/shop/Microsoft-office-365-personal.jpeg' },
    { id: 113, name: 'Microsoft Office 365 5 Users Family', category: 'Microsoft', price: '$100', image: '/images/shop/Microsoft-office-365-5-users-family.jpeg' },
    { id: 114, name: 'Windows 7 SP1 Professional 64bit', category: 'Microsoft', price: '$150', image: '/images/shop/windows-7-sp1-professional-64bit.jpeg' },
    { id: 115, name: 'Keyboard and Mouse Combo 214573', category: 'Keyboards and Mice', price: '$45', image: '/images/shop/214573-1684423928.jpeg' },
    { id: 116, name: 'Dell Optical Mouse', category: 'Keyboards and Mice', price: '$25', image: '/images/shop/Dell-optical-mouse.jpeg' },
    { id: 117, name: 'Dell Pro Wireless Keyboard and Mouse KM5221W', category: 'Keyboards and Mice', price: '$65', image: '/images/shop/Dell-pro-wireless-keyboard-and-mouse-km5221w.jpeg' },
    { id: 118, name: 'Panasonic Cordless Telephone KXTG3611', category: 'Desk Phones - Analogue Phones', price: '$85', image: '/images/shop/Panasonic-cordless-telephone-kxtg3611.jpeg' },
    { id: 119, name: 'Panasonic Telephone KXTS880MX', category: 'Desk Phones - Analogue Phones', price: '$120', image: '/images/shop/Panasonic-telephone-kxts880mx.jpeg' },
    { id: 120, name: 'Panasonic Telephone System KXTS500MX NX', category: 'Desk Phones - Analogue Phones', price: '$180', image: '/images/shop/Panasonic-telephone-system-kxts500mx-nx.jpeg' },
    { id: 121, name: 'Grandstream PABX UCM 6304', category: 'Desk Phones - PABX', price: '$450', image: '/images/shop/Grandstream-PABX-ucm-6304.jpeg' },
    { id: 122, name: 'Grandstream PABX UCM6302', category: 'Desk Phones - PABX', price: '$380', image: '/images/shop/Grandstream-PABX-ucm6302.jpeg' },
    { id: 123, name: 'Harddrive Caddy 3.5" 4TB-8TB SATA', category: 'Computers - Servers - Accessories', price: '$45', image: '/images/shop/Harddrive-caddy-3.5-4tb-8tb-sata.jpeg' },
    { id: 124, name: 'Grand Stream DP750 Base Station', category: 'Desk Phones - Volp Phones', price: '$180', image: '/images/shop/Grand-stream-dp750-base-station.jpeg' },
    { id: 125, name: 'Grand Stream DP752 Base', category: 'Desk Phones - Volp Phones', price: '$220', image: '/images/shop/Grand-stream-dp752-base.jpeg' },
    { id: 126, name: 'Grandstream Cordless Volp Phone Home & Office', category: 'Desk Phones - Volp Phones', price: '$150', image: '/images/shop/Grandstream-cordless-volp-phone-home&office.jpeg' },
    { id: 127, name: 'Hikvision Access Control Terminal', category: 'CCTV - Access Control', price: '$450', image: '/images/shop/Hikvision-access-control-terminal.jpeg' },
    { id: 128, name: 'Hikvision Card Dispatcher DS-K1F100-D8E', category: 'CCTV - Access Control', price: '$280', image: '/images/shop/Hikvision-card-dispatcher-ds-k1f100-d8e.jpeg' },
    { id: 129, name: 'Dahua 4C Pentabrid 1HDD Wizsense DVR', category: 'CCTV - Dahua Recorders', price: '$350', image: '/images/shop/Dahua-4c-pentabrid-1hdd-wizsense-dvr.jpeg' },
    { id: 130, name: 'Dahua 4CH Compact 1U 265NVR', category: 'CCTV - Dahua Recorders', price: '$280', image: '/images/shop/Dahua-4ch-compact-1u,265nvr.jpeg' },
    { id: 131, name: 'Dahua 16CH 2HDD DHI-2216-16P-I NVR', category: 'CCTV - Dahua Recorders', price: '$650', image: '/images/shop/Dahua-16ch-2hdd-dhi-2216-16p-I-nvr.jpeg' },
    { id: 132, name: 'Hikvision 2.8mm 3K Smart Audio Indoor', category: 'CCTV - HikVision Cameras - Analogue Cameras', price: '$280', image: '/images/shop/Hikvision-2.8mm-3k-smart-audio-indoor.jpeg' },
    { id: 133, name: 'Hikvision 2.8mm DS2CE10DF0TLPF S2.8', category: 'CCTV - HikVision Cameras - Analogue Cameras', price: '$320', image: '/images/shop/Hikvision-2.8mm-ds2ce10df0tlpfS2.8.jpeg' },
    { id: 134, name: '4MP 4mm ColorVu Smart Hybrid Light Fixed', category: 'CCTV - HikVision Cameras - IP Cameras', price: '$380', image: '/images/shop/4mp4mm-colorvu-smart-hybrid-light-fixed.jpeg' },
    { id: 135, name: 'Hikvision 2MP Smart Hybrid Dome Camera', category: 'CCTV - HikVision Cameras - IP Cameras', price: '$450', image: '/images/shop/Hikvision-2mp-smart-hybrid-dome-camer.jpeg' },
    { id: 136, name: 'Dahua Access Control Video Intercom', category: 'CCTV - Intercoms', price: '$320', image: '/images/shop/Dahua-access-control-video-intercom.jpeg' },
    { id: 137, name: 'Hikvision DS-KIS20-3T Video Door Phone', category: 'CCTV - Intercoms', price: '$380', image: '/images/shop/Hikvision-ds-kis20-3t-video-door-phone.jpeg' },
    { id: 138, name: 'Dahua 2.8mm HDCV IR Eyeball Camera', category: 'CCTV - Dahua Cameras - Analogue Cameras', price: '$280', image: '/images/shop/Dahua-2.8mm-hdcv-ir-eyeball-camera.jpeg' },
    { id: 139, name: 'Dahua 5MP 2.8mm DH Eyeball Camera', category: 'CCTV - Dahua Cameras - Analogue Cameras', price: '$320', image: '/images/shop/Dahua-5mp-2,8mm-dh-eyeball-camera.jpeg' }
  ];

  // Filter products by category & search
  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToQuote = (product: Product) => {
    const existingItem = quoteItems.find(item => item.id === product.id);
    
    if (existingItem) {
      alert(`${product.name} is already in your quote!`);
      return;
    }
    
    setQuoteItems([...quoteItems, product]);
    
    // Create a more prominent notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-[9999] flex items-center gap-3 transform transition-all duration-300 translate-x-full';
    notification.innerHTML = `
      <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <div class="font-semibold text-lg">Added to Quote!</div>
        <div class="text-sm opacity-90">${product.name} - ${product.price}</div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
      notification.classList.add('translate-x-0');
    }, 100);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  };

  const handleRemoveFromQuote = (productId: number) => {
    setQuoteItems(quoteItems.filter(item => item.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleWhatsAppInquiry = (product: Product, type: 'inquiry' | 'spec' | 'order' = 'inquiry') => {
    const messages = {
      inquiry: `Hi SMCI Team! I'm interested in the ${product.name} (${product.category}) priced at ${product.price}. Could you provide more details?`,
      spec: `Hi SMCI Team! I'd like detailed specifications for the ${product.name} (${product.category}).`,
      order: `Hi SMCI Team! I'd like to place an order for the ${product.name} (${product.category}) at ${product.price}.`
    };
    
    const whatsappUrl = `https://wa.me/263772351216?text=${encodeURIComponent(messages[type])}`;
    window.open(whatsappUrl, '_blank');
  };

  // Pagination logic
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      // Scroll to top of products
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Floating Quote Cart Button */}
      <button
        onClick={() => setIsQuoteCartOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 z-[9998] flex items-center gap-2 hover:scale-110"
      >
        <ShoppingCart size={20} />
        {quoteItems.length > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold animate-pulse">
            {quoteItems.length}
          </span>
        )}
      </button>

      {/* Banner */}
      <div className="h-64 bg-gray-900 relative overflow-hidden">
        <img 
          src="/images/shop/hero-2.jpg" 
          alt="Product Showcase" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(10, 37, 64, 0.85)'}} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Product Catalogue</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-2">
                {Object.entries(categoryStructure).map(([category, subcategories]) => {
                  const hasSubcategories = subcategories && (
                    (Array.isArray(subcategories) && subcategories.length > 0) ||
                    (typeof subcategories === 'object' && subcategories !== null)
                  );
                  
                  return (
                    <div key={category}>
                      <button
                        onClick={() => {
                          if (hasSubcategories) {
                            toggleCategory(category);
                          }
                          setActiveCategory(category);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                          activeCategory === category
                            ? 'bg-blue-50 text-blue-600 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category}</span>
                        {hasSubcategories && (
                          <svg 
                            className={`w-4 h-4 transition-transform ${
                              expandedCategories.includes(category) ? 'rotate-90' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                      
                      {/* Subcategories */}
                      {hasSubcategories && expandedCategories.includes(category) && (
                        <div className="ml-4 mt-1 space-y-1">
                          {Array.isArray(subcategories) ? (
                            subcategories.map(subcategory => (
                              <button
                                key={`${category}-${subcategory}`}
                                onClick={() => setActiveCategory(`${category} - ${subcategory}`)}
                                className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                                  activeCategory === `${category} - ${subcategory}`
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                              >
                                {subcategory}
                              </button>
                            ))
                          ) : (
                            Object.entries(subcategories).map(([subcat, subsubcategories]) => (
                              <div key={`${category}-${subcat}`}>
                                <button
                                  onClick={() => {
                                    if (subsubcategories && subsubcategories.length > 0) {
                                      toggleCategory(`${category}-${subcat}`);
                                    }
                                    setActiveCategory(`${category} - ${subcat}`);
                                  }}
                                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex items-center justify-between ${
                                    activeCategory === `${category} - ${subcat}`
                                      ? 'bg-blue-50 text-blue-600 font-semibold'
                                      : 'text-gray-500 hover:bg-gray-50'
                                  }`}
                                >
                                  <span>{subcat}</span>
                                  {subsubcategories && subsubcategories.length > 0 && (
                                    <svg 
                                      className={`w-3 h-3 transition-transform ${
                                        expandedCategories.includes(`${category}-${subcat}`) ? 'rotate-90' : ''
                                      }`} 
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  )}
                                </button>
                                
                                {/* Sub-subcategories */}
                                {subsubcategories && subsubcategories.length > 0 && expandedCategories.includes(`${category}-${subcat}`) && (
                                  <div className="ml-4 mt-1 space-y-1">
                                    {subsubcategories.map((subsubcategory: string) => (
                                      <button
                                        key={`${category}-${subcat}-${subsubcategory}`}
                                        onClick={() => setActiveCategory(`${category} - ${subcat} - ${subsubcategory}`)}
                                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors text-xs ${
                                          activeCategory === `${category} - ${subcat} - ${subsubcategory}`
                                            ? 'bg-blue-50 text-blue-600 font-semibold'
                                            : 'text-gray-400 hover:bg-gray-50'
                                        }`}
                                      >
                                        {subsubcategory}
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Top bar with results count and search */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  {filteredProducts.length} results found
                  {searchTerm && ` for "${searchTerm}"`}
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                </p>
                {(searchTerm || activeCategory !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                      setPage(1);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* No results message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                      setPage(1);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                  <a
                    href="mailto:admin@smci.co.zw?subject=Product Inquiry - SMCI Shop&body=Hi SMCI Team,%0A%0AI'm interested in your products but couldn't find what I'm looking for.%0A%0ACould you help me with:%0A- [Describe what you're looking for]%0A- Your budget range%0A- Any specific requirements%0A%0AThank you!"
                    className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Email Us for Help
                  </a>
                </div>
              </div>
            )}

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">Starting from <span className="text-gray-900 font-bold">{product.price}</span></p>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button
                        onClick={() => handleAddToQuote(product)}
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Quote
                      </button>
                      
                      {/* WhatsApp Quick Actions */}
                      <div className="grid grid-cols-3 gap-1">
                        <button
                          onClick={() => handleWhatsAppInquiry(product, 'inquiry')}
                          className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1"
                          title="Quick Inquiry"
                        >
                          <MessageCircle className="w-3 h-3" />
                          Ask
                        </button>
                        <button
                          onClick={() => handleWhatsAppInquiry(product, 'spec')}
                          className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1"
                          title="Get Specifications"
                        >
                          <HelpCircle className="w-3 h-3" />
                          Specs
                        </button>
                        <button
                          onClick={() => handleWhatsAppInquiry(product, 'order')}
                          className="bg-green-50 hover:bg-green-100 text-green-700 px-2 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1"
                          title="Place Order"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <button 
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    pageNum === page 
                      ? 'bg-blue-600 text-white' 
                      : 'border hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              
              <button 
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Cart Modal */}
      <QuoteCart
        isOpen={isQuoteCartOpen}
        onClose={() => setIsQuoteCartOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveFromQuote}
        onClearCart={handleClearQuote}
      />

      {/* Contact Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Order?</h2>
            <p className="text-gray-600">Contact us for product inquiries, bulk orders, or technical support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">Get a response within 24 hours</p>
              <a 
                href="mailto:admin@smci.co.zw?subject=SMCI Shop Inquiry&body=Hi SMCI Team,%0A%0AI would like to inquire about:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                admin@smci.co.zw
              </a>
              <br />
              <a 
                href="mailto:sales@smci.co.zw?subject=SMCI Sales Inquiry&body=Hi SMCI Sales Team,%0A%0AI'm interested in:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                sales@smci.co.zw
              </a>
              <br />
              <a 
                href="mailto:support@smci.co.zw?subject=SMCI Support Request&body=Hi SMCI Support Team,%0A%0AI need help with:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                support@smci.co.zw
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">Mon-Fri, 8AM-5PM</p>
              <a 
                href="tel:+263292884998"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm block mb-1"
              >
                +263 292 884998
              </a>
                          </div>

            {/* WhatsApp Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Quick Enquiries</h3>
              <p className="text-gray-600 text-sm mb-4">Instant responses, usually within minutes</p>
              
              <div className="space-y-2">
                <a 
                  href="https://wa.me/263772351216?text=Hi SMCI Team! I'm interested in your products and would like more information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full text-left bg-green-50 hover:bg-green-100 text-green-700 p-3 rounded-lg transition-colors"
                >
                  <HelpCircle className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">General Inquiry</div>
                    <div className="text-xs opacity-75">Ask about products & services</div>
                  </div>
                </a>
                <a 
                  href="https://wa.me/263772351216?text=Hi SMCI Team! I'd like to request a quote for bulk orders."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full text-left bg-green-50 hover:bg-green-100 text-green-700 p-3 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Request Quote</div>
                    <div className="text-xs opacity-75">Bulk pricing & orders</div>
                  </div>
                </a>
                <a 
                  href="https://wa.me/263772351216?text=Hi SMCI Team! I need technical support for my recent purchase."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full text-left bg-green-50 hover:bg-green-100 text-green-700 p-3 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Technical Support</div>
                    <div className="text-xs opacity-75">Help with products</div>
                  </div>
                </a>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="text-xs text-gray-500 mb-2">Direct WhatsApp Number:</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
