import React, { useState } from 'react';
import {
  Send, User, ArrowLeft, Check, QrCode, Search, 
  DollarSign, CreditCard, Building, Phone, AlertCircle
} from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  avatar: string;
  lastTransaction?: string;
}
import './SendMoney.css';
interface SendMoneyProps {}

const SendMoney: React.FC<SendMoneyProps> = () => {
  const [step, setStep] = useState<'select' | 'amount' | 'review' | 'success'>('select');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const recentContacts: Contact[] = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', avatar: 'SJ', lastTransaction: '$250' },
    { id: 2, name: 'Mike Chen', email: 'mike.chen@email.com', avatar: 'MC', lastTransaction: '$100' },
    { id: 3, name: 'Emma Davis', email: 'emma.d@email.com', avatar: 'ED', lastTransaction: '$75' },
    { id: 4, name: 'James Wilson', email: 'james.w@email.com', avatar: 'JW', lastTransaction: '$500' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa.a@email.com', avatar: 'LA', lastTransaction: '$200' },
  ];

  const filteredContacts = recentContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact);
    setStep('amount');
  };

  const handleAmountSubmit = () => {
    if (amount && parseFloat(amount) > 0) {
      setStep('review');
    }
  };

  const handleSendMoney = () => {
    setStep('success');
    setTimeout(() => {
      resetFlow();
    }, 3000);
  };

  const resetFlow = () => {
    setStep('select');
    setSelectedContact(null);
    setAmount('');
    setNote('');
    setSearchQuery('');
  };

  const renderSelectContact = () => (
    <div className="send-money-container">
      <div className="send-money-header">
        <h2 className="send-money-title">Send Money</h2>
        <p className="send-money-subtitle">Select a recipient or add new</p>
      </div>

      <div className="search-container">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="quick-actions">
        <button className="quick-action-btn">
          <QrCode className="quick-action-icon" />
          <span>Scan QR</span>
        </button>
        <button className="quick-action-btn">
          <Phone className="quick-action-icon" />
          <span>Phone</span>
        </button>
        <button className="quick-action-btn">
          <Building className="quick-action-icon" />
          <span>Bank</span>
        </button>
      </div>

      <div className="contacts-section">
        <h3 className="section-title">Recent Contacts</h3>
        <div className="contacts-list">
          {filteredContacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => handleContactSelect(contact)}
              className="contact-card"
            >
              <div className="contact-avatar gradient-bg">{contact.avatar}</div>
              <div className="contact-info">
                <p className="contact-name">{contact.name}</p>
                <p className="contact-email">{contact.email}</p>
              </div>
              <div className="contact-meta">
                <p className="last-transaction">{contact.lastTransaction}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAmountInput = () => (
    <div className="send-money-container">
      <button onClick={() => setStep('select')} className="back-button">
        <ArrowLeft className="icon" />
      </button>

      <div className="send-money-header">
        <h2 className="send-money-title">Enter Amount</h2>
        <div className="recipient-preview">
          <div className="contact-avatar gradient-bg">{selectedContact?.avatar}</div>
          <div>
            <p className="recipient-name">{selectedContact?.name}</p>
            <p className="recipient-email">{selectedContact?.email}</p>
          </div>
        </div>
      </div>

      <div className="amount-input-section">
        <div className="currency-symbol">$</div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="amount-input"
          autoFocus
        />
      </div>

      <div className="quick-amounts">
        {[50, 100, 250, 500].map((value) => (
          <button
            key={value}
            onClick={() => setAmount(value.toString())}
            className="quick-amount-btn"
          >
            ${value}
          </button>
        ))}
      </div>

      <div className="note-section">
        <label className="note-label">Add a note (optional)</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="What's this for?"
          className="note-input"
          rows={3}
        />
      </div>

      <button
        onClick={handleAmountSubmit}
        disabled={!amount || parseFloat(amount) <= 0}
        className="primary-button"
      >
        Continue
      </button>
    </div>
  );

  const renderReview = () => (
    <div className="send-money-container">
      <button onClick={() => setStep('amount')} className="back-button">
        <ArrowLeft className="icon" />
      </button>

      <div className="send-money-header">
        <h2 className="send-money-title">Review & Send</h2>
        <p className="send-money-subtitle">Please confirm the details</p>
      </div>

      <div className="review-card">
        <div className="review-amount">
          <p className="review-label">You're sending</p>
          <h3 className="review-value">${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
        </div>

        <div className="review-divider" />

        <div className="review-detail">
          <p className="review-label">To</p>
          <div className="review-recipient">
            <div className="contact-avatar gradient-bg">{selectedContact?.avatar}</div>
            <div>
              <p className="review-recipient-name">{selectedContact?.name}</p>
              <p className="review-recipient-email">{selectedContact?.email}</p>
            </div>
          </div>
        </div>

        {note && (
          <div className="review-detail">
            <p className="review-label">Note</p>
            <p className="review-note">{note}</p>
          </div>
        )}

        <div className="review-detail">
          <p className="review-label">Payment method</p>
          <div className="payment-method">
            <CreditCard className="payment-icon" />
            <span>FinFlow Balance</span>
          </div>
        </div>

        <div className="review-detail">
          <p className="review-label">Transaction fee</p>
          <p className="review-fee">$0.00</p>
        </div>

        <div className="review-divider" />

        <div className="review-total">
          <p className="review-label">Total</p>
          <p className="review-total-amount">${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      <div className="info-banner">
        <AlertCircle className="info-icon" />
        <p className="info-text">Money will be sent instantly and cannot be reversed</p>
      </div>

      <button onClick={handleSendMoney} className="primary-button confirm-button">
        <Send className="button-icon" />
        Send ${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </button>
    </div>
  );

  const renderSuccess = () => (
    <div className="send-money-container success-container">
      <div className="success-animation">
        <div className="success-circle gradient-bg">
          <Check className="success-icon" />
        </div>
      </div>

      <h2 className="success-title">Money Sent!</h2>
      <p className="success-subtitle">
        ${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2 })} sent to {selectedContact?.name}
      </p>

      <div className="success-details">
        <div className="success-detail-item">
          <p className="detail-label">Transaction ID</p>
          <p className="detail-value">TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>
        <div className="success-detail-item">
          <p className="detail-label">Date & Time</p>
          <p className="detail-value">{new Date().toLocaleString()}</p>
        </div>
      </div>

      <button onClick={resetFlow} className="secondary-button">
        Done
      </button>
    </div>
  );

  switch (step) {
    case 'select':
      return renderSelectContact();
    case 'amount':
      return renderAmountInput();
    case 'review':
      return renderReview();
    case 'success':
      return renderSuccess();
    default:
      return renderSelectContact();
  }
};

export default SendMoney;
