import React, { useState, useEffect } from "react";

function Donation() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [donationHistory, setDonationHistory] = useState([]);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [target, setTarget] = useState(100); 
  const [badge, setBadge] = useState("");
  const [badgeEmoji, setBadgeEmoji] = useState("");

  
  useEffect(() => {
    const currentMonth = new Date().getMonth(); 
    const history = JSON.parse(localStorage.getItem("donationHistory")) || [];
    const monthlyDonations = history.filter(
      (donation) => new Date(donation.date).getMonth() === currentMonth
    );
    const totalAmount = monthlyDonations.reduce(
      (acc, donation) => acc + donation.amount,
      0
    );

    setDonationHistory(history);
    setMonthlyTotal(totalAmount);

    
    if (totalAmount >= target) {
      setBadge("Gold Donor");
      setBadgeEmoji("🏅");
    } else if (totalAmount >= target / 2) {
      setBadge("Silver Donor");
      setBadgeEmoji("🥈");
    } else if (totalAmount > 0) {
      setBadge("Bronze Donor");
      setBadgeEmoji("🥉");
    }
  }, []);

  const handleDonate = (e) => {
    e.preventDefault();

    
    const newDonation = {
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    const updatedHistory = [...donationHistory, newDonation];
    localStorage.setItem("donationHistory", JSON.stringify(updatedHistory));

    
    setDonationHistory(updatedHistory);
    setMessage(`Thank you for donating $${amount}!`);
    setAmount("");

    
    const currentMonth = new Date().getMonth();
    const monthlyDonations = updatedHistory.filter(
      (donation) => new Date(donation.date).getMonth() === currentMonth
    );
    const totalAmount = monthlyDonations.reduce(
      (acc, donation) => acc + donation.amount,
      0
    );
    setMonthlyTotal(totalAmount);

    
    if (totalAmount >= target) {
      setBadge("Gold Donor");
      setBadgeEmoji("🏅");
    } else if (totalAmount >= target / 2) {
      setBadge("Silver Donor");
      setBadgeEmoji("🥈");
    } else if (totalAmount > 0) {
      setBadge("Bronze Donor");
      setBadgeEmoji("🥉");
    }
  };

  const renderDonationHistory = () => {
    return donationHistory.map((donation, index) => (
      <div key={index}>
        <p>
          {new Date(donation.date).toLocaleDateString()} - ${donation.amount}
        </p>
      </div>
    ));
  };

  const renderGreeting = () => {
    if (monthlyTotal === 0) {
      return <h3>Welcome! Thank you for considering donating this month.</h3>;
    } else {
      return (
        <h3>
          Thank you for your continued support! You've donated a total of $
          {monthlyTotal} this month.
        </h3>
      );
    }
  };

  return (
    <div className="container mt-5">
      <h1>Make a Donation</h1>

      {renderGreeting()}

      <form onSubmit={handleDonate} className="mt-4">
        <div className="mb-3">
          <label htmlFor="donationAmount" className="form-label">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="donationAmount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
      </form>

      {message && <div className="alert alert-success mt-3">{message}</div>}

      {monthlyTotal > 0 && (
        <div className="mt-3">
          <h4>Donation History:</h4>
          {renderDonationHistory()}
        </div>
      )}

      {badge && (
        <div className="mt-3">
          <h4>
            Badge: {badge} {badgeEmoji}
          </h4>
        </div>
      )}
    </div>
  );
}

export default Donation;
