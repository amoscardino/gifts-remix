
interface GrandTotalProps {
  amount: number;
}

const GrandTotal = ({ amount }: GrandTotalProps) => {
  const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="text-center mb-3">
      Grand Total:
      &nbsp;
      <strong>
        {numberFormat.format(amount)}
      </strong>
    </div>
  );
};

export default GrandTotal;
