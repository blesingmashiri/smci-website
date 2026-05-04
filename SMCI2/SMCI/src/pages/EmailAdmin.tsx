import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Users, Shield, Settings, Plus, Edit, Trash2, Eye, EyeOff, Copy, CheckCircle, AlertCircle } from 'lucide-react';

interface EmailAccount {
  id: string;
  email: string;
  displayName: string;
  department: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  lastLogin?: string;
  storageUsed: number;
  storageLimit: number;
  aliases: string[];
  forwarding?: string;
  autoReply?: string;
}

const EmailAdmin: React.FC = () => {
  const [accounts, setAccounts] = useState<EmailAccount[]>([
    {
      id: '1',
      email: 'admin@smci.co.zw',
      displayName: 'System Administrator',
      department: 'IT',
      role: 'Administrator',
      status: 'active',
      createdAt: '2024-01-01',
      lastLogin: '2024-11-15T09:30:00Z',
      storageUsed: 2.5,
      storageLimit: 50,
      aliases: ['administrator@smci.co.zw', 'sysadmin@smci.co.zw'],
      forwarding: 'kissingtonncube@smci.co.zw',
      autoReply: 'Thank you for your email. We will respond within 24 hours.'
    },
    {
      id: '2',
      email: 'kissingtonncube@smci.co.zw',
      displayName: 'Kissington Ncube',
      department: 'Management',
      role: 'Director',
      status: 'active',
      createdAt: '2024-01-01',
      lastLogin: '2024-11-15T14:22:00Z',
      storageUsed: 15.8,
      storageLimit: 50,
      aliases: ['director@smci.co.zw', 'kncube@smci.co.zw']
    },
    {
      id: '3',
      email: 'sales@smci.co.zw',
      displayName: 'Sales Department',
      department: 'Sales',
      role: 'Department',
      status: 'active',
      createdAt: '2024-02-15',
      lastLogin: '2024-11-15T11:45:00Z',
      storageUsed: 8.2,
      storageLimit: 50,
      aliases: ['enquiries@smci.co.zw', 'info@smci.co.zw'],
      autoReply: 'Thank you for your sales inquiry. Our team will respond shortly.'
    },
    {
      id: '4',
      email: 'support@smci.co.zw',
      displayName: 'Technical Support',
      department: 'IT',
      role: 'Department',
      status: 'active',
      createdAt: '2024-02-15',
      lastLogin: '2024-11-15T16:10:00Z',
      storageUsed: 12.1,
      storageLimit: 50,
      aliases: ['help@smci.co.zw', 'techsupport@smci.co.zw'],
      autoReply: 'Thank you for contacting SMCI Support. We prioritize technical issues and respond within 4 hours.'
    },
    {
      id: '5',
      email: 'compliance@smci.co.zw',
      displayName: 'Compliance Officer',
      department: 'Legal',
      role: 'Department',
      status: 'active',
      createdAt: '2024-03-01',
      lastLogin: '2024-11-14T10:30:00Z',
      storageUsed: 3.7,
      storageLimit: 50,
      aliases: ['legal@smci.co.zw', 'policy@smci.co.zw']
    },
    {
      id: '6',
      email: 'finance@smci.co.zw',
      displayName: 'Finance Department',
      department: 'Finance',
      role: 'Department',
      status: 'pending',
      createdAt: '2024-11-10',
      storageUsed: 0.5,
      storageLimit: 50,
      aliases: ['accounts@smci.co.zw', 'billing@smci.co.zw']
    }
  ]);

  const [showPassword, setShowPassword] = useState<{[key: string]: boolean}>({});
  const [selectedAccount, setSelectedAccount] = useState<EmailAccount | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStoragePercentage = (used: number, limit: number) => {
    return (used / limit) * 100;
  };

  const getStorageColor = (percentage: number) => {
    if (percentage > 80) return 'bg-red-500';
    if (percentage > 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const togglePasswordVisibility = (email: string) => {
    setShowPassword(prev => ({ ...prev, [email]: !prev[email] }));
  };

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const stats = {
    total: accounts.length,
    active: accounts.filter(a => a.status === 'active').length,
    pending: accounts.filter(a => a.status === 'pending').length,
    totalStorage: accounts.reduce((sum, a) => sum + a.storageUsed, 0),
    totalLimit: accounts.reduce((sum, a) => sum + a.storageLimit, 0)
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Email Administration - SMCI</title>
        <meta name="description" content="SMCI Email Administration - Manage email accounts and settings." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Email Administration</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Manage SMCI email accounts @smci.co.zw
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto"
        >
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-blue-600" />
                <span className="text-sm text-gray-600">Total Accounts</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.total}</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-sm text-gray-600">Active</span>
              </div>
              <div className="text-3xl font-bold text-green-600">{stats.active}</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                <span className="text-sm text-gray-600">Pending</span>
              </div>
              <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-purple-600" />
                <span className="text-sm text-gray-600">Storage Used</span>
              </div>
              <div className="text-3xl font-bold text-purple-600">
                {stats.totalStorage.toFixed(1)} GB
              </div>
              <div className="text-sm text-gray-500">
                of {stats.totalLimit} GB
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Email Accounts</h2>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Account
            </button>
          </div>

          {/* Accounts Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email Account
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Storage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {accounts.map((account, index) => (
                    <motion.tr
                      key={account.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">
                              {account.email}
                            </div>
                            <button
                              onClick={() => copyToClipboard(account.email)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              {copiedEmail === account.email ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          <div className="text-sm text-gray-500">{account.displayName}</div>
                          {account.aliases.length > 0 && (
                            <div className="text-xs text-gray-400">
                              Aliases: {account.aliases.join(', ')}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{account.department}</div>
                        <div className="text-sm text-gray-500">{account.role}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(account.status)}`}>
                          {account.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">
                              {account.storageUsed.toFixed(1)} GB / {account.storageLimit} GB
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${getStorageColor(getStoragePercentage(account.storageUsed, account.storageLimit))}`}
                                style={{ width: `${getStoragePercentage(account.storageUsed, account.storageLimit)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedAccount(account)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Account Details Modal */}
          {selectedAccount && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Account Details</h3>
                  <button
                    onClick={() => setSelectedAccount(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Basic Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Basic Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-600">Email Address</label>
                        <div className="font-medium">{selectedAccount.email}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Display Name</label>
                        <div className="font-medium">{selectedAccount.displayName}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Department</label>
                        <div className="font-medium">{selectedAccount.department}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Role</label>
                        <div className="font-medium">{selectedAccount.role}</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Status</label>
                        <div>
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedAccount.status)}`}>
                            {selectedAccount.status}
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Created</label>
                        <div className="font-medium">{selectedAccount.createdAt}</div>
                      </div>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Password Management</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <input
                            type={showPassword[selectedAccount.email] ? 'text' : 'password'}
                            value="************"
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                          />
                          <button
                            onClick={() => togglePasswordVisibility(selectedAccount.email)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            {showPassword[selectedAccount.email] ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const newPassword = generatePassword();
                          alert(`New password: ${newPassword}\nPlease save this securely.`);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Generate Password
                      </button>
                    </div>
                  </div>

                  {/* Aliases */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Email Aliases</h4>
                    <div className="space-y-2">
                      {selectedAccount.aliases.map((alias, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="flex-1 px-3 py-2 bg-gray-50 rounded-md">{alias}</span>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-gray-600 hover:border-gray-400 hover:text-gray-700">
                        + Add Alias
                      </button>
                    </div>
                  </div>

                  {/* Forwarding */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Email Forwarding</h4>
                    <input
                      type="email"
                      value={selectedAccount.forwarding || ''}
                      placeholder="Forward to email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  {/* Auto Reply */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Auto Reply Message</h4>
                    <textarea
                      value={selectedAccount.autoReply || ''}
                      placeholder="Auto reply message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => setSelectedAccount(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default EmailAdmin;
