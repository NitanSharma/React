# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Lottery Game

This Lottery game is a React-based application where users can generate random tickets and check if they win based on a predefined winning sum.

## How the Lottery Game Works

### Components Overview

1. **`App.jsx`**:
   - The root component that renders the `Lottery` component with props `n` (number of ticket numbers) and `winningSum` (the sum required to win).

2. **`Lottery.jsx`**:
   - Manages the state of the ticket and determines if the ticket is a winning ticket.
   - Contains the logic to generate a new ticket and check if the sum of the ticket numbers matches the winning sum.

3. **`Ticket.jsx`**:
   - Renders the ticket numbers by mapping over the array of numbers and passing each number to the `TicketNum` component.

4. **`TicketNum.jsx`**:
   - Displays an individual ticket number.

5. **`helper.js`**:
   - Contains utility functions:
     - `genTicket(n)`: Generates an array of `n` random numbers between 0 and 9.
     - `sum(arr)`: Calculates the sum of an array of numbers.

### Flow of the Game

1. **Initial Setup**:
   - The `Lottery` component initializes the state `ticket` using the `genTicket(n)` function, which generates an array of `n` random numbers.
   - The `isWinning` variable checks if the sum of the ticket numbers (calculated using `sum(ticket)`) equals the `winningSum`.

2. **Rendering the Ticket**:
   - The `Ticket` component receives the `ticket` array as a prop and maps over it to render each number using the `TicketNum` component.

3. **Buying a New Ticket**:
   - When the "Buy New Ticket" button is clicked, the `buyNewTicket` function is triggered.
   - This function generates a new ticket using `genTicket(n)` and updates the `ticket` state.

4. **Winning Check**:
   - After generating a new ticket, the `isWinning` variable is recalculated to check if the sum of the new ticket numbers matches the `winningSum`.
   - If the condition is met, a congratulatory message ("Congratulations, you won!") is displayed.

### Example Flow

1. The user opens the app, and a ticket with 5 random numbers is displayed (e.g., `[3, 5, 7, 2, 4]`).
2. The sum of the ticket numbers is calculated (e.g., `3 + 5 + 7 + 2 + 4 = 21`).
3. If the sum matches the `winningSum` (e.g., `21`), the user wins.
4. The user can click "Buy New Ticket" to generate a new ticket and try again.

### Props in `Lottery.jsx`

- **`n`**: The number of numbers in the ticket (default is 3).
- **`winningSum`**: The sum required to win the game (default is 15).

### Utility Functions in `helper.js`

1. **`genTicket(n)`**:
   - Generates an array of `n` random numbers between 0 and 9.
   - Example:
     ```javascript
     genTicket(3); // [4, 7, 2]
     ```

2. **`sum(arr)`**:
   - Calculates the sum of an array of numbers.
   - Example:
     ```javascript
     sum([4, 7, 2]); // 13
     ```

### Key Features

- Random ticket generation.
- Dynamic winning condition based on the sum of ticket numbers.
- Ability to generate new tickets and try again.
- Modular components for better reusability and maintainability.
