## Monad Auto TX

## 📢 Join Our Community

# [TelegramChannel](https://t.me/kedaidrop)

Monad-Auto adalah alat otomatisasi blockchain yang dirancang untuk berinteraksi dengan berbagai layanan mata uang kripto untuk bertukar dan mempertaruhkan token. Ini menyediakan antarmuka dasbor untuk memantau operasi dan log, dan itu berputar melalui tugas-tugas seperti membungkus/membuka dan mempertaruhkan/membuka taruhan token.

## Features

- **Dashboard Interface**: Real-time updates on balance, network status, and transaction history.
- **Automated Cycles**: Configurable cycles for executing swap and staking operations.
- **Blockchain Interactions**: Utilizes the `ethers` library for seamless blockchain operations.
- **API Integrations**: Interacts with external APIs to check transaction statuses and claimable staking rewards.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anggasec28/monad-auto.git
   cd monad-auto
   ```

2. Install dependencies:

   ```bash
   npm install ethers@5 dotenv ethers ora readline cfonts prompts colors axios chalk figlet solc
   ```

3. Edit .env file file and input your private keys (one per line)

   ```bash
   nano .env
   ```

## Usage

- **Start the bot**:

  ```bash
  node main.js
  ```

- **Dashboard**: The dashboard will display real-time information about the bot's operations, including balance, network status, and transaction logs.

## Configuration

- **Network Settings**: Configure the RPC URL and explorer URL in `config/config.json`.
- **API Endpoints**: Set the API endpoints for liquid staking and other services.
- **Contract Addresses**: Update the contract addresses for the tokens and services you wish to interact with.
- **Cycle Parameters**: Adjust the cycle count, cooldown time, and delay settings to suit your needs.
