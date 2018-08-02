const PROXY_CONFIG = [
  {
    context: [
      "/rest-ws/**",
      "/search/**",
      "/structure/**",
      "/inboxservice/**",
      "/bpm/**",
      "/agent/**",
      "/login**",
      "/auth/info**",
      "/logout**"
    ],
    target: "http://127.0.0.1:4300/",
    secure: false,
    logLevel: "debug"
  }
];

module.exports = PROXY_CONFIG;
