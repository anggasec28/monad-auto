require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc"); 

  console.log(`
  
			${"██╗░░██╗███████╗██████╗░░█████╗░██╗██████╗░██████╗░░█████╗░██████╗░".cyan}
			${"██║░██╔╝██╔════╝██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗".cyan}
			${"█████═╝░█████╗░░██║░░██║███████║██║██║░░██║██████╔╝██║░░██║██████╔╝".cyan}
			${"██╔═██╗░██╔══╝░░██║░░██║██╔══██║██║██║░░██║██╔══██╗██║░░██║██╔═══╝░".cyan}
			${"██║░╚██╗███████╗██████╔╝██║░░██║██║██████╔╝██║░░██║╚█████╔╝██║░░░░░".cyan}
			${"╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝░░╚═╝╚═╝╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░".cyan}

            ${"🔥 Join my Telegram:".bold} ${"@kedaidrop".underline.brightCyan}
            ${"🌐 GitHub:".bold} ${"https://github.com/anggasec28".underline.brightCyan}

            ${"✅ Auto Swap".bold}
            ${"✅ Auto Stake & Unstake".bold}
            ${"✅ Randomized address transactions & new address generation".bold}
            ${"✅ Transactions may fail due to network congestion—this is normal".bold}
            ${"❤️  Support:".bold} ${"https://sociabuzz.com/anggasec".underline.brightCyan}
  `.split("\n").join("\n")); 
}

module.exports = displayHeader;