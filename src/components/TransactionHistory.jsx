import styles from "./TransactionHistory.module.css";

function TransactionHistory({ transactions }) {
    return (
        <div className={styles.transactionContainer}>
            <p className={styles.title}>Transaction History</p>
            <table className={styles.transactionHistory}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className={styles.tableRow}>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionHistory;
