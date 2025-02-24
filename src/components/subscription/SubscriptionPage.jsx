// src/components/subscription/SubscriptionPage.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Clock, Calendar, X, ArrowRight, Info } from 'lucide-react';

function SubscriptionPage() {
  const { plan } = useParams(); // 'monthly' or 'annual'
  const { currentUser, updateSubscription, SUBSCRIPTION_TYPES } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(plan || 'monthly');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const subscriptionPlans = [
    {
      id: SUBSCRIPTION_TYPES.MONTHLY,
      name: 'Monthly Plan',
      chineseName: '月度計劃',
      price: '$19.99',
      billingPeriod: 'monthly',
      features: [
        'Access to premium Daoist Yoga practices',
        'Full theory module access',
        'Guided meditation library',
        'Practice tracking & progress',
        'New monthly content'
      ],
      limitations: [
        'No weekly content updates',
        'No advanced practices',
        'No teacher Q&A access'
      ]
    },
    {
      id: SUBSCRIPTION_TYPES.ANNUAL,
      name: 'Annual Plan',
      chineseName: '年度計劃',
      price: '$199.99',
      billingPeriod: 'annual',
      savings: 'Save $40',
      features: [
        'Everything in Monthly Plan',
        'Weekly content releases',
        'Advanced practice sequences',
        'Full Inner Alchemy curriculum',
        'Teacher Q&A sessions',
        'Exclusive seasonal workshops',
        'Personal practice calendar'
      ],
      limitations: []
    }
  ];
  
  const mockProcessPayment = async () => {
    setIsProcessing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock successful subscription
    const today = new Date();
    const expiryDate = new Date();
    
    if (selectedPlan === SUBSCRIPTION_TYPES.MONTHLY) {
      expiryDate.setMonth(today.getMonth() + 1);
    } else {
      expiryDate.setFullYear(today.getFullYear() + 1);
    }
    
    updateSubscription(selectedPlan, expiryDate.toISOString());
    setIsProcessing(false);
    setShowSuccess(true);
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };
  
  // Check if user is already subscribed to this plan
  const isCurrentPlan = currentUser?.subscription === selectedPlan;
  
  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">修行之旅</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Your Practice Journey
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Choose a subscription plan that aligns with your commitment to the path.
            Deepen your practice with premium content and weekly releases.
          </p>
        </div>
        
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-12 bg-jade-500/20 border border-jade-500/50 rounded-xl p-6 text-center">
            <h3 className="text-2xl font-serif text-jade-400 mb-4">Subscription Successful</h3>
            <p className="text-stone-300 mb-4">
              Thank you for your commitment to the path. Your {selectedPlan} subscription is now active.
            </p>
            <p className="text-stone-400">
              Redirecting to your dashboard...
            </p>
          </div>
        )}
        
        {/* Subscription Plans */}
        {!showSuccess && (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.id}
                className={`bg-stone-800/50 transition-all duration-300 
                         ${selectedPlan === plan.id 
                           ? 'border-gold-500 shadow-lg shadow-gold-500/10' 
                           : 'border-jade-500/10 hover:border-jade-500/30'}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-chinese text-lg text-gold-500">{plan.chineseName}</p>
                      <CardTitle className="text-2xl text-stone-100">{plan.name}</CardTitle>
                    </div>
                    {selectedPlan === plan.id && (
                      <div className="p-2 bg-gold-500 rounded-full">
                        <Check className="w-5 h-5 text-stone-900" />
                      </div>
                    )}
                  </div>
                  
                  {plan.savings && (
                    <div className="absolute -top-3 -right-3 bg-gold-500 text-stone-900 
                                  text-xs font-bold px-3 py-1 rounded-full">
                      {plan.savings}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-serif text-stone-100">{plan.price}</p>
                      <p className="text-stone-400 text-sm mb-1">/ {plan.billingPeriod}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-stone-300 font-medium mb-2">Includes:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-stone-300">
                          <Check className="w-4 h-4 mt-1 text-jade-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <p className="text-stone-400 font-medium mb-2">Not included:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start gap-2 text-stone-500">
                            <X className="w-4 h-4 mt-1 text-stone-500" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Plan Icon */}
                  <div className="flex justify-center mt-8 mb-6">
                    {plan.id === SUBSCRIPTION_TYPES.MONTHLY ? (
                      <div className="p-4 bg-jade-500/10 rounded-full">
                        <Clock className="w-8 h-8 text-jade-500" />
                      </div>
                    ) : (
                      <div className="p-4 bg-gold-500/10 rounded-full">
                        <Calendar className="w-8 h-8 text-gold-500" />
                      </div>
                    )}
                  </div>
                  
                  {/* Call to Action */}
                  <button
                    className={`w-full py-3 rounded-lg font-medium 
                              transition-all duration-300 flex items-center justify-center gap-2
                              ${isCurrentPlan 
                                ? 'bg-stone-700 text-stone-400 cursor-not-allowed' 
                                : plan.id === SUBSCRIPTION_TYPES.MONTHLY
                                  ? 'bg-jade-500 hover:bg-jade-600 text-stone-100'
                                  : 'bg-gold-500 hover:bg-gold-600 text-stone-900'}`}
                    onClick={() => !isCurrentPlan && !isProcessing && mockProcessPayment()}
                    disabled={isCurrentPlan || isProcessing}
                  >
                    {isCurrentPlan ? (
                      'Current Plan'
                    ) : isProcessing && selectedPlan === plan.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </CardContent>