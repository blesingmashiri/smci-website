export interface SMCIProfile {
  tagline: string;
  address: string;
  emails: string[];
  services: string[];
}

export const smciProfile: SMCIProfile = {
  tagline: "Efficiency Our Virtue, Experience Our Attitude!!!",
  address: "Suite No. 301 CIPF Centre, Jason Moyo Street, Bulawayo",
  emails: [
    "admin@smci.co.zw",
    "sales@smci.co.zw",
    "support@smci.co.zw"
  ],
  services: [
    "Designing and Fitting World",
    "Computer Hardware World",
    "Computer Software World",
    "Customised Training World",
    "Security Systems World",
    "E-Learning World"
  ]
};
