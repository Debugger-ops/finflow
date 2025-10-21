"use client";
import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Filter,
  Download,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import './analytics.css';
import {  MetricCardProps  } from "../models/props";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const AnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('spending');

  // Sample data for different charts
  const monthlyData = [
    { month: 'Jan', income: 5800, expenses: 3200, savings: 2600 },
    { month: 'Feb', income: 5800, expenses: 3400, savings: 2400 },
    { month: 'Mar', income: 6200, expenses: 3100, savings: 3100 },
    { month: 'Apr', income: 5800, expenses: 3600, savings: 2200 },
    { month: 'May', income: 5800, expenses: 3300, savings: 2500 },
    { month: 'Jun', income: 6000, expenses: 3420, savings: 2580 },
  ];

  const categoryData = [
    { name: 'Food & Dining', value: 890, color: '#3B82F6' },
    { name: 'Transportation', value: 420, color: '#10B981' },
    { name: 'Shopping', value: 650, color: '#F59E0B' },
    { name: 'Bills & Utilities', value: 580, color: '#EF4444' },
    { name: 'Entertainment', value: 280, color: '#8B5CF6' },
    { name: 'Healthcare', value: 320, color: '#06B6D4' },
    { name: 'Others', value: 180, color: '#84CC16' }
  ];

  const dailySpendingData = [
    { day: '1', amount: 45 },
    { day: '2', amount: 120 },
    { day: '3', amount: 80 },
    { day: '4', amount: 200 },
    { day: '5', amount: 150 },
    { day: '6', amount: 90 },
    { day: '7', amount: 110 },
    { day: '8', amount: 75 },
    { day: '9', amount: 160 },
    { day: '10', amount: 95 },
    { day: '11', amount: 130 },
    { day: '12', amount: 85 },
    { day: '13', amount: 175 },
    { day: '14', amount: 140 }
  ];

  const savingsGrowthData = [
    { month: 'Jan', amount: 12500 },
    { month: 'Feb', amount: 14900 },
    { month: 'Mar', amount: 18000 },
    { month: 'Apr', amount: 20200 },
    { month: 'May', amount: 22700 },
    { month: 'Jun', amount: 25280 }
  ];

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon, color }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className={`metric-icon ${color}`}>
          {icon}
        </div>
        <div className="metric-info">
          <h3 className="metric-title">{title}</h3>
          <p className="metric-value">{value}</p>
          <p className={`metric-change ${change >= 0 ? "positive" : "negative"}`}>
            {change >= 0 ? (
              <TrendingUp className="small-icon" />
            ) : (
              <TrendingDown className="small-icon" />
            )}
            {Math.abs(change)}% vs last month
          </p>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className="analytics-dashboard">
      {/* Header Controls */}
      <div className="analytics-header">
        <div className="analytics-title">
          <h2>Financial Analytics</h2>
          <p>Detailed insights into your financial patterns</p>
        </div>
        <div className="analytics-controls">
          <select 
            value={selectedPeriod} 
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="period-select"
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          <button className="export-btn">
            <Download className="small-icon" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <MetricCard
          title="Total Income"
          value="$35,800"
          change={8.2}
          icon={<TrendingUp className="icon" />}
          color="green-bg"
        />
        <MetricCard
          title="Total Expenses"
          value="$20,520"
          change={-3.1}
          icon={<TrendingDown className="icon" />}
          color="red-bg"
        />
        <MetricCard
          title="Net Savings"
          value="$15,280"
          change={12.5}
          icon={<Activity className="icon" />}
          color="blue-bg"
        />
        <MetricCard
          title="Savings Rate"
          value="42.7%"
          change={5.3}
          icon={<PieChart className="icon" />}
          color="purple-bg"
        />
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Income vs Expenses Trend */}
        <div className="chart-card large">
          <div className="chart-header">
            <h3>Income vs Expenses Trend</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-dot income"></div>
                <span>Income</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot expenses"></div>
                <span>Expenses</span>
              </div>
              <div className="legend-item">
                <div className="legend-dot savings"></div>
                <span>Savings</span>
              </div>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#10b981' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#ef4444' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Spending by Category</h3>
            <p className="chart-subtitle">This month</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <RechartsPieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="category-list">
            {categoryData.slice(0, 4).map((category, index) => (
              <div key={index} className="category-item">
                <div 
                  className="category-color" 
                  style={{ backgroundColor: category.color }}
                ></div>
                <span className="category-name">{category.name}</span>
                <span className="category-amount">${category.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Spending Pattern */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Daily Spending Pattern</h3>
            <p className="chart-subtitle">Last 14 days</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dailySpendingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Savings Growth */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Savings Growth</h3>
            <p className="chart-subtitle">6 month trend</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={savingsGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#10b981" 
                  fill="url(#savingsGradient)"
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="insights-section">
        <h3>AI-Powered Insights</h3>
        <div className="insights-grid">
          <div className="insight-card positive">
            <div className="insight-icon">
              <TrendingUp className="icon" />
            </div>
            <div className="insight-content">
              <h4>Great Progress!</h4>
              <p>Your savings rate increased by 5.3% this month. You're on track to meet your emergency fund goal 2 months early.</p>
            </div>
          </div>
          
          <div className="insight-card warning">
            <div className="insight-icon">
              <Activity className="icon" />
            </div>
            <div className="insight-content">
              <h4>Spending Alert</h4>
              <p>Your dining expenses are 23% higher than usual this month. Consider meal planning to optimize spending.</p>
            </div>
          </div>
          
          <div className="insight-card info">
            <div className="insight-icon">
              <BarChart3 className="icon" />
            </div>
            <div className="insight-content">
              <h4>Optimization Tip</h4>
              <p>You could save $150/month by switching to a high-yield savings account with 4.5% APY.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AnalyticsDashboard;