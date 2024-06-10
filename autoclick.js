const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const proxyChain = require("proxy-chain");

puppeteer.use(StealthPlugin());

const links = [
  "https://link4me.vip/hailey",
  "https://link4me.vip/demi",
  "https://link4me.vip/evelyn",
  "https://link4me.vip/lucero",
  "https://link4me.vip/luna",
];

const proxies = [
  "104.223.157.51:6290@anvmxlqf:m3t0hrazmemc",
  "154.92.124.76:5104@anvmxlqf:m3t0hrazmemc",
  "185.242.93.91:8431@anvmxlqf:m3t0hrazmemc",
  "134.73.18.190:6773@anvmxlqf:m3t0hrazmemc",
  "206.41.168.173:6838@anvmxlqf:m3t0hrazmemc",
  "207.244.218.207:5815@anvmxlqf:m3t0hrazmemc",
  "45.87.69.175:6180@anvmxlqf:m3t0hrazmemc",
  "107.181.154.205:5883@anvmxlqf:m3t0hrazmemc",
  "198.23.214.86:6353@anvmxlqf:m3t0hrazmemc",
  "207.244.217.129:6676@anvmxlqf:m3t0hrazmemc",
  "64.137.62.197:5842@anvmxlqf:m3t0hrazmemc",
  "107.181.141.153:6550@anvmxlqf:m3t0hrazmemc",
  "150.107.202.8:6625@anvmxlqf:m3t0hrazmemc",
  "45.43.68.191:5831@anvmxlqf:m3t0hrazmemc",
  "102.212.91.226:6538@anvmxlqf:m3t0hrazmemc",
  "185.39.8.103:5760@anvmxlqf:m3t0hrazmemc",
  "45.138.117.164:6936@anvmxlqf:m3t0hrazmemc",
  "45.151.161.40:6131@anvmxlqf:m3t0hrazmemc",
  "192.186.172.235:9235@anvmxlqf:m3t0hrazmemc",
  "216.19.217.170:6410@anvmxlqf:m3t0hrazmemc",
  "45.41.160.92:6074@anvmxlqf:m3t0hrazmemc",
  "154.85.124.194:6055@anvmxlqf:m3t0hrazmemc",
  "64.137.92.3:6202@anvmxlqf:m3t0hrazmemc",
  "66.78.34.50:5669@anvmxlqf:m3t0hrazmemc",
  "45.41.173.211:6578@anvmxlqf:m3t0hrazmemc",
  "154.85.124.240:6101@anvmxlqf:m3t0hrazmemc",
  "104.238.7.13:5940@anvmxlqf:m3t0hrazmemc",
  "185.72.240.58:7094@anvmxlqf:m3t0hrazmemc",
  "43.245.116.231:6746@anvmxlqf:m3t0hrazmemc",
  "104.250.203.126:5816@anvmxlqf:m3t0hrazmemc",
  "198.23.147.5:5020@anvmxlqf:m3t0hrazmemc",
  "103.101.90.221:6486@anvmxlqf:m3t0hrazmemc",
  "161.123.138.103:6275@anvmxlqf:m3t0hrazmemc",
  "171.22.249.220:5800@anvmxlqf:m3t0hrazmemc",
  "156.238.7.157:6169@anvmxlqf:m3t0hrazmemc",
  "104.239.91.219:5943@anvmxlqf:m3t0hrazmemc",
  "45.43.177.212:6540@anvmxlqf:m3t0hrazmemc",
  "64.137.14.26:5692@anvmxlqf:m3t0hrazmemc",
  "157.52.174.177:6386@anvmxlqf:m3t0hrazmemc",
  "104.250.201.171:6716@anvmxlqf:m3t0hrazmemc",
  "107.181.132.48:6026@anvmxlqf:m3t0hrazmemc",
  "45.131.95.196:5860@anvmxlqf:m3t0hrazmemc",
  "45.61.123.229:5908@anvmxlqf:m3t0hrazmemc",
  "156.238.7.8:6020@anvmxlqf:m3t0hrazmemc",
  "45.192.147.185:5833@anvmxlqf:m3t0hrazmemc",
  "119.42.38.109:6291@anvmxlqf:m3t0hrazmemc",
  "185.245.25.27:6288@anvmxlqf:m3t0hrazmemc",
  "104.239.52.35:7197@anvmxlqf:m3t0hrazmemc",
  "147.185.217.201:6635@anvmxlqf:m3t0hrazmemc",
  "84.33.26.9:5680@anvmxlqf:m3t0hrazmemc",
  "206.41.164.201:6500@anvmxlqf:m3t0hrazmemc",
  "138.128.145.137:6056@anvmxlqf:m3t0hrazmemc",
  "156.238.10.234:5316@anvmxlqf:m3t0hrazmemc",
  "103.47.52.116:8158@anvmxlqf:m3t0hrazmemc",
  "64.43.89.149:6408@anvmxlqf:m3t0hrazmemc",
  "103.75.228.248:6327@anvmxlqf:m3t0hrazmemc",
  "173.211.0.170:6663@anvmxlqf:m3t0hrazmemc",
  "45.151.163.58:5811@anvmxlqf:m3t0hrazmemc",
  "103.37.181.96:6752@anvmxlqf:m3t0hrazmemc",
  "154.30.242.181:9575@anvmxlqf:m3t0hrazmemc",
  "64.137.14.148:5814@anvmxlqf:m3t0hrazmemc",
  "185.242.94.159:6244@anvmxlqf:m3t0hrazmemc",
  "154.92.116.67:6379@anvmxlqf:m3t0hrazmemc",
  "216.173.72.51:6670@anvmxlqf:m3t0hrazmemc",
  "107.181.130.10:5631@anvmxlqf:m3t0hrazmemc",
  "138.128.159.79:6570@anvmxlqf:m3t0hrazmemc",
  "172.102.218.96:5996@anvmxlqf:m3t0hrazmemc",
  "103.3.227.116:6669@anvmxlqf:m3t0hrazmemc",
  "45.252.59.228:6254@anvmxlqf:m3t0hrazmemc",
  "138.128.153.60:5094@anvmxlqf:m3t0hrazmemc",
  "193.161.3.24:6128@anvmxlqf:m3t0hrazmemc",
  "64.137.106.195:6688@anvmxlqf:m3t0hrazmemc",
  "185.72.242.63:5746@anvmxlqf:m3t0hrazmemc",
  "102.212.91.104:6416@anvmxlqf:m3t0hrazmemc",
  "184.174.28.88:5103@anvmxlqf:m3t0hrazmemc",
  "104.223.171.79:6370@anvmxlqf:m3t0hrazmemc",
  "45.192.134.216:6537@anvmxlqf:m3t0hrazmemc",
  "103.75.230.205:6596@anvmxlqf:m3t0hrazmemc",
  "104.148.5.170:6181@anvmxlqf:m3t0hrazmemc",
  "84.33.11.217:6499@anvmxlqf:m3t0hrazmemc",
  "209.99.165.235:6140@anvmxlqf:m3t0hrazmemc",
  "104.239.38.151:6684@anvmxlqf:m3t0hrazmemc",
  "38.170.161.72:9123@anvmxlqf:m3t0hrazmemc",
  "104.239.0.86:5787@anvmxlqf:m3t0hrazmemc",
  "45.192.134.57:6378@anvmxlqf:m3t0hrazmemc",
  "154.92.114.100:5795@anvmxlqf:m3t0hrazmemc",
  "5.157.131.159:8419@anvmxlqf:m3t0hrazmemc",
  "45.43.64.38:6296@anvmxlqf:m3t0hrazmemc",
  "138.128.153.120:5154@anvmxlqf:m3t0hrazmemc",
  "64.137.103.27:6615@anvmxlqf:m3t0hrazmemc",
  "161.123.208.132:6376@anvmxlqf:m3t0hrazmemc",
  "38.154.195.42:9130@anvmxlqf:m3t0hrazmemc",
  "45.43.184.43:5717@anvmxlqf:m3t0hrazmemc",
  "104.250.205.139:5886@anvmxlqf:m3t0hrazmemc",
  "38.154.206.173:9664@anvmxlqf:m3t0hrazmemc",
  "216.19.205.85:6406@anvmxlqf:m3t0hrazmemc",
  "45.41.176.168:6466@anvmxlqf:m3t0hrazmemc",
  "89.32.200.32:6488@anvmxlqf:m3t0hrazmemc",
  "38.170.190.153:9504@anvmxlqf:m3t0hrazmemc",
  "104.250.204.232:6323@anvmxlqf:m3t0hrazmemc",
];

(async () => {
  for (const proxy of proxies) {
    // Splitting the proxy string based on "@" and ":" to correctly extract host, port, username, and password
    const [hostPort, credentials] = proxy.split("@");
    const [username, password] = credentials.split(":");
    const oldProxyUrl = `http://${username}:${password}@${hostPort}`;
    const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

    const browser = await puppeteer.launch({
      args: [`--proxy-server=${newProxyUrl}`],
    });

    for (const link of links) {
      const page = await browser.newPage();
      await page.goto(link, { waitUntil: "networkidle2" });
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 minutes
      await page.close(); // Close the page once done
    }

    await browser.close();
    console.log(
      `Finished browsing with proxy ${proxy}. Waiting for 5 minutes before switching to next proxy.`
    );
    await new Promise((resolve) => setTimeout(resolve, 300000)); // Wait for 5 minutes
  }
})();
