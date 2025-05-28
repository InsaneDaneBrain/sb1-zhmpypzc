/**
 * Enhanced API documentation page with interactive examples and SDK documentation
 */
import React, { useState } from 'react';
import { Code, Copy, Check, Terminal, Database, Shield } from 'lucide-react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui/Container';
import Button from '../components/ui/Button';

const API: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = [
    {
      language: 'bash',
      code: 'npm install @blockrewards/sdk'
    },
    {
      language: 'javascript',
      code: `import { BRClient } from '@blockrewards/sdk';
const client = new BRClient({ apiKey: 'YOUR_KEY' });
const balance = await client.getBalance(userUID);`
    }
  ];

  const endpoints = [
    {
      method: 'GET',
      path: '/v1/users/{uid}/balance',
      description: 'Returns BRP & BT balances',
      icon: <Database size={20} className="text-purple-400" />
    },
    {
      method: 'POST',
      path: '/v1/rewards/mint',
      description: 'Mint branded tokens for a purchase',
      icon: <Terminal size={20} className="text-purple-400" />
    },
    {
      method: 'GET',
      path: '/v1/nfts/{nftId}',
      description: 'Fetch gift card or badge metadata',
      icon: <Shield size={20} className="text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onWaitlistClick={() => {}} />
      <main className="pt-24 pb-16">
        <Container>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Developer API & SDK</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Build on top of Block Rewards: mint tokens, fetch balances, manage NFTs, and more.
            </p>
          </div>

          {/* Quickstart */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Quickstart
            </h2>
            <div className="space-y-6">
              {codeExamples.map((example, index) => (
                <div key={index} className="relative">
                  <div className="bg-background-secondary rounded-xl p-6 border border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-text-secondary">{example.language}</span>
                      <button
                        onClick={() => handleCopy(example.code, index)}
                        className="text-text-secondary hover:text-white transition-colors"
                      >
                        {copiedIndex === index ? (
                          <Check size={20} className="text-green-400" />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>
                    </div>
                    <pre className="text-purple-400 overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Endpoints */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Key Endpoints
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {endpoint.icon}
                    <span className="text-sm font-mono bg-purple-500/20 px-2 py-1 rounded">
                      {endpoint.method}
                    </span>
                  </div>
                  <div className="font-mono text-sm text-purple-400 mb-3">
                    {endpoint.path}
                  </div>
                  <p className="text-text-secondary">
                    {endpoint.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Documentation Links */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading mb-6">More Resources</h2>
            <p className="text-text-secondary mb-8">
              See the full Swagger reference and browse our JavaScript, Python, and cURL examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">View Full API Reference</Button>
              <Button variant="outline">Download SDK</Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default API;