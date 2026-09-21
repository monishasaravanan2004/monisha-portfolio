import React, { useState } from 'react';
import useTilt from '../../hooks/useTilt';
import { Shield, Lock, Globe, Database, Check } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'restaurant' | 'admin' | 'delivery'>('customer');
  const [activeScreen, setActiveScreen] = useState<'home' | 'restaurants' | 'menu' | 'db'>('home');

  const { elementRef: probRef, tiltProps: probProps } = useTilt(5, 1.015);
  const { elementRef: solRef, tiltProps: solProps } = useTilt(5, 1.015);
  const { elementRef: db1Ref, tiltProps: db1Props } = useTilt(5, 1.015);
  const { elementRef: db2Ref, tiltProps: db2Props } = useTilt(5, 1.015);
  const { elementRef: db3Ref, tiltProps: db3Props } = useTilt(5, 1.015);
  const { elementRef: db4Ref, tiltProps: db4Props } = useTilt(5, 1.015);
  const { elementRef: db5Ref, tiltProps: db5Props } = useTilt(5, 1.015);
  const { elementRef: db6Ref, tiltProps: db6Props } = useTilt(5, 1.015);
  const { elementRef: sec1Ref, tiltProps: sec1Props } = useTilt(5, 1.015);
  const { elementRef: sec2Ref, tiltProps: sec2Props } = useTilt(5, 1.015);
  const { elementRef: sec3Ref, tiltProps: sec3Props } = useTilt(5, 1.015);
  const { elementRef: road1Ref, tiltProps: road1Props } = useTilt(5, 1.015);
  const { elementRef: road2Ref, tiltProps: road2Props } = useTilt(5, 1.015);
  const { elementRef: road3Ref, tiltProps: road3Props } = useTilt(5, 1.015);

  const getAddressUrl = () => {
    switch (activeScreen) {
      case 'home': return 'localhost:3000/home';
      case 'restaurants': return 'localhost:3000/restaurants';
      case 'menu': return 'localhost:3000/menu';
      case 'db': return 'mysql://root@localhost/food_delivery_db';
    }
  };

  return (
    <section id="featured-project" className="py-24 px-6 md:px-16 relative z-10 border-b border-[var(--border-card)] bg-[var(--bg-main)]/30">
      <div className="max-w-[1300px] mx-auto w-full">
        
        <div className="section-header mb-16 text-center">
          <span className="section-label text-xs uppercase tracking-[3px] text-[#D8A7FF] font-bold mb-2 block">
            Case Study (Centerpiece)
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-[#F8F7FB]">
            Food Delivery Platform: <span className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] bg-clip-text text-transparent">Enterprise Showcase</span>.
          </h2>
        </div>

        {/* Hero Info Banner */}
        <div className="glass-card p-8 border-[#D8A7FF]/30 mb-12 shadow-2xl relative overflow-hidden">
          <span className="text-xs font-mono text-[#D8A7FF] font-bold tracking-widest uppercase mb-2 block">
            Featured Core Development
          </span>
          <h3 className="text-3xl font-extrabold font-heading text-[#F8F7FB] tracking-tight mb-2">
            Food Delivery Application
          </h3>
          <p className="text-base text-[#FBBF24] font-semibold mb-6">
            Enterprise-Level Java Full Stack Web Application
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-6 border-t border-[#D8A7FF]/15 text-xs text-[#C8C3D0]">
            <div>Role: <strong className="text-[#F8F7FB] block mt-1">Java Full Stack Developer</strong></div>
            <div>Status: <strong className="text-[#F8F7FB] block mt-1">Currently Developing</strong></div>
            <div>Category: <strong className="text-[#F8F7FB] block mt-1">Full Stack Platform</strong></div>
            <div>Backend: <strong className="text-[#F8F7FB] block mt-1">Spring Boot / MVC</strong></div>
            <div>Frontend: <strong className="text-[#F8F7FB] block mt-1">ReactJS / Hooks</strong></div>
            <div>Database: <strong className="text-[#F8F7FB] block mt-1">MySQL Relational</strong></div>
          </div>
        </div>

        {/* Problem and Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div ref={probRef} {...probProps} className="glass-card p-8 flex flex-col gap-4 border-[#D8A7FF]/15 tilt-card">
            <span className="text-2xl">⚠️</span>
            <h4 className="text-xl font-bold font-heading text-[#F8F7FB]">The Problem Statement</h4>
            <p className="text-sm text-[#C8C3D0] leading-relaxed">
              Traditional food ordering systems are often fragmented, difficult to scale, and lack centralized structures to monitor transaction status. Customers struggle with slow feedback times, while restaurant operators lack consolidated pipelines to publish menu modifications, verify incoming orders, and track deliveries efficiently.
            </p>
          </div>
          <div ref={solRef} {...solProps} className="glass-card p-8 flex flex-col gap-4 border-[#D8A7FF]/15 tilt-card">
            <span className="text-2xl text-[#D8A7FF]">✓</span>
            <h4 className="text-xl font-bold font-heading text-[#F8F7FB]">The Enterprise Solution</h4>
            <p className="text-sm text-[#C8C3D0] leading-relaxed">
              We designed a decoupled, layered Full Stack Food Delivery Platform. By utilizing Java Spring Boot to construct secure REST APIs and ReactJS to build responsive client dashboards, we unified transactions under JWT-validated session filters, communicating with MySQL databases through Hibernate ORM.
            </p>
          </div>
        </div>

        {/* Architecture Vertical Flow */}
        <div className="mb-20 text-center">
          <h4 className="text-xl font-bold font-heading text-[#F8F7FB] mb-2">Decoupled Layered Architecture</h4>
          <p className="text-sm text-[#C8C3D0] max-w-[600px] mx-auto mb-8">
            Illustrating how client transactions propagate down the MVC layers of the Spring Boot application server to MySQL databases.
          </p>
          
          <div className="arch-stack relative max-w-[500px] mx-auto flex flex-col gap-3 py-6 bg-[#121018]/50 border border-[#D8A7FF]/20 rounded-2xl">
            <div className="arch-pulse"></div>
            <div className="arch-layer client border border-[#D8A7FF]/30 bg-[#D8A7FF]/10 text-[#D8A7FF] font-semibold p-4 mx-4 rounded-xl text-xs">Client Interface (ReactJS Web App)</div>
            <div className="arch-layer frontend border border-[#D8A7FF]/20 bg-[#D8A7FF]/5 text-[#D8A7FF]/90 p-3 mx-4 rounded-xl text-xs">REST API Gateway (Axios Requests / Routing)</div>
            <div className="arch-layer backend border border-[#FBBF24]/30 bg-[#FBBF24]/10 text-[#FBBF24] font-semibold p-4 mx-4 rounded-xl text-xs">Controller Layer (RestControllers mapping Endpoints)</div>
            <div className="arch-layer backend border border-[#FBBF24]/20 bg-[#FBBF24]/5 text-[#FBBF24]/90 p-3 mx-4 rounded-xl text-xs">Service Layer (Enterprise Business Logic validations)</div>
            <div className="arch-layer backend border border-[#FBBF24]/20 bg-[#FBBF24]/5 text-[#FBBF24]/90 p-3 mx-4 rounded-xl text-xs">Repository Layer (Spring Data JPA interfaces)</div>
            <div className="arch-layer backend border border-[#FBBF24]/20 bg-[#FBBF24]/5 text-[#FBBF24]/90 p-3 mx-4 rounded-xl text-xs">Entity Layer (JPA annotated data mappings)</div>
            <div className="arch-layer database border border-[#D8A7FF]/30 bg-[#D8A7FF]/10 text-[#D8A7FF] font-semibold p-4 mx-4 rounded-xl text-xs">Hibernate ORM / persistence engine</div>
            <div className="arch-layer database border border-[#D8A7FF]/20 bg-[#D8A7FF]/5 text-[#D8A7FF]/90 p-3 mx-4 rounded-xl text-xs">MySQL Database Engine</div>
          </div>
        </div>

        {/* MVC Flow Grid */}
        <div className="mb-20 text-center">
          <h4 className="text-xl font-bold font-heading text-[#F8F7FB] mb-2">Complete Request-Response Flow</h4>
          <p className="text-sm text-[#C8C3D0] max-w-[600px] mx-auto mb-10">
            Tracing a user ordering sequence from browser triggers through MVC layers to persistent storage.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono font-semibold max-w-[900px] mx-auto">
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">👥 User</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">🖥️ Browser</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#D8A7FF]/10 border border-[#D8A7FF]/30 text-[#D8A7FF] px-3 py-2 rounded-lg">⚛️ React Frontend</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">🔗 REST API</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-[#FBBF24] px-3 py-2 rounded-lg">🔀 Controller</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">⚙️ Service</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">📁 Repo</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#121018] border border-[#D8A7FF]/20 px-3 py-2 rounded-lg text-[#F8F7FB]">💾 Hibernate</span>
            <span className="text-[#928B9E]">→</span>
            <span className="bg-[#D8A7FF]/10 border border-[#D8A7FF]/30 text-[#D8A7FF] px-3 py-2 rounded-lg">🐬 MySQL</span>
          </div>
        </div>

        {/* Roles Tabbed Dashboards */}
        <div className="mb-20">
          <h4 className="text-xl font-bold font-heading text-[#F8F7FB] text-center mb-2">Decentralized User Dashboards</h4>
          <p className="text-sm text-[#C8C3D0] text-center max-w-[650px] mx-auto mb-8">
            Click through the four distinct user roles to preview dashboard highlights and features.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['customer', 'restaurant', 'admin', 'delivery'] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`tab-btn px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === role
                    ? 'bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-extrabold shadow-lg shadow-[#D8A7FF]/20'
                    : 'bg-[#121018] text-[#C8C3D0] border border-[#D8A7FF]/20 hover:text-[#F8F7FB] hover:border-[#D8A7FF]/50'
                }`}
              >
                {role === 'restaurant' ? 'Restaurant Owner' : role === 'admin' ? 'Administrator' : role === 'delivery' ? 'Delivery Partner' : role}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Viewport Render */}
            <div className="lg:col-span-7">
              <div className="browser-mockup border border-[var(--border-card)] rounded-2xl overflow-hidden bg-[var(--bg-main)] shadow-2xl">
                <div className="browser-bar bg-[rgba(255,255,255,0.02)] border-b border-[var(--border-card)] px-4 py-3 flex items-center justify-between">
                  <div className="browser-dots flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <div className="browser-address bg-[var(--bg-main)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)] px-6 py-1 rounded-lg font-mono">
                    localhost:3000/dashboard/{activeTab}
                  </div>
                  <div></div>
                </div>
                
                <div className="browser-viewport p-6 min-h-[220px] flex flex-col justify-between">
                  <div className="flex justify-between items-center border-b border-[var(--border-card)] pb-3 mb-4">
                    <span className="font-bold text-sm text-[var(--text-primary)]">
                      {activeTab === 'customer' && '🍔 FreshEats Storefront'}
                      {activeTab === 'restaurant' && '🍳 Kitchen Analytics'}
                      {activeTab === 'admin' && '🛡️ System Monitor'}
                      {activeTab === 'delivery' && '🛵 Courier Grid'}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border border-[var(--accent)] text-[var(--accent)]">
                      {activeTab} Portal
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] p-3 rounded-xl flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">
                        {activeTab === 'customer' ? 'Active Orders' : activeTab === 'restaurant' ? "Today's Sales" : activeTab === 'admin' ? 'Active Users' : 'Active Deliveries'}
                      </span>
                      <strong className="text-sm text-[var(--text-primary)]">
                        {activeTab === 'customer' && '1 Order'}
                        {activeTab === 'restaurant' && '₹18,450.00'}
                        {activeTab === 'admin' && '1,450 Nodes'}
                        {activeTab === 'delivery' && '0 Active'}
                      </strong>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] p-3 rounded-xl flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">
                        {activeTab === 'customer' ? 'Total Spent' : activeTab === 'restaurant' ? 'Orders Pending' : activeTab === 'admin' ? 'Total Revenue' : 'Total Trips'}
                      </span>
                      <strong className="text-sm text-[var(--text-primary)]">
                        {activeTab === 'customer' && '₹1,240.00'}
                        {activeTab === 'restaurant' && '8 Orders'}
                        {activeTab === 'admin' && '₹145,900'}
                        {activeTab === 'delivery' && '14 Trips'}
                      </strong>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.02)] border border-[var(--border-card)] p-3 rounded-xl flex flex-col gap-1">
                      <span className="text-[10px] text-[var(--text-secondary)] uppercase">
                        {activeTab === 'customer' ? 'Favorites' : activeTab === 'restaurant' ? 'Menu Items' : activeTab === 'admin' ? 'Servers Status' : 'Earnings'}
                      </span>
                      <strong className="text-sm text-[var(--text-primary)]">
                        {activeTab === 'customer' && '4 Places'}
                        {activeTab === 'restaurant' && '42 Dishes'}
                        {activeTab === 'admin' && '99.9%'}
                        {activeTab === 'delivery' && '₹1,850.00'}
                      </strong>
                    </div>
                  </div>

                  <div className="flex gap-2 h-16 items-end justify-center bg-[#08070B]/50 border border-[#D8A7FF]/20 rounded-xl p-3">
                    <div className="w-8 bg-[#D8A7FF] rounded-t" style={{ height: activeTab === 'customer' ? '30%' : '70%' }}></div>
                    <div className="w-8 bg-[#FBBF24] rounded-t" style={{ height: activeTab === 'customer' ? '50%' : '30%' }}></div>
                    <div className="w-8 bg-[#D8A7FF] rounded-t" style={{ height: activeTab === 'customer' ? '80%' : '90%' }}></div>
                    <div className="w-8 bg-[#C084FC] rounded-t" style={{ height: activeTab === 'customer' ? '40%' : '50%' }}></div>
                    <div className="w-8 bg-[#FBBF24] rounded-t" style={{ height: activeTab === 'customer' ? '90%' : '20%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Viewport Description */}
            <div className="lg:col-span-5">
              <h4 className="text-lg font-bold font-heading text-[#F8F7FB] mb-4">
                {activeTab === 'customer' && 'Customer Experience Features'}
                {activeTab === 'restaurant' && 'Restaurant Owner Features'}
                {activeTab === 'admin' && 'Administrator Panel Features'}
                {activeTab === 'delivery' && 'Delivery Partner Features'}
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-[#C8C3D0]">
                {activeTab === 'customer' && (
                  <>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> JWT session validations.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Catalog listings &amp; filter tags.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Interactive shopping carts updates.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Secure order payments checkouts.</li>
                  </>
                )}
                {activeTab === 'restaurant' && (
                  <>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Menu catalog uploads &amp; pricing modifications.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Active queues displaying incoming food items.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Sales volume graphs.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Available/Out-of-Stock inventory switches.</li>
                  </>
                )}
                {activeTab === 'admin' && (
                  <>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Global database audits for restaurant verification.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> User role configuration panel mappings.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Server runtime monitoring.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Revenue reports and system statistics.</li>
                  </>
                )}
                {activeTab === 'delivery' && (
                  <>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Mobile layout &amp; availability switches.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Trip mapping showing pickup / drop coordinates.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Order status progression updates.</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#D8A7FF]" /> Completed travel histories.</li>
                  </>
                )}
              </ul>
            </div>

          </div>
        </div>

        {/* ER Diagrams Mappings */}
        <div className="mb-20">
          <h4 className="text-xl font-bold font-heading text-[var(--text-primary)] text-center mb-2">Database Entity Mappings</h4>
          <p className="text-sm text-[var(--text-secondary)] text-center max-w-[600px] mx-auto mb-10">
            Tracing Primary Keys, Foreign Keys, and cardinal relationships across 6 key tables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div ref={db1Ref} {...db1Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">📋 users</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span>email</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span>password</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | role_id</span><span>BIGINT</span></div>
              </div>
            </div>

            <div ref={db2Ref} {...db2Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">🏢 restaurants</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span>name</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span>address</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | owner_id</span><span>BIGINT</span></div>
              </div>
            </div>

            <div ref={db3Ref} {...db3Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">🍕 food_items</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span>name</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span>price</span><span>DOUBLE</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | restaurant_id</span><span>BIGINT</span></div>
              </div>
            </div>

            <div ref={db4Ref} {...db4Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">🛒 cart</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | user_id</span><span>BIGINT</span></div>
              </div>
            </div>

            <div ref={db5Ref} {...db5Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">📦 orders</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span>status</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | user_id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | restaurant_id</span><span>BIGINT</span></div>
              </div>
            </div>

            <div ref={db6Ref} {...db6Props} className="glass-card p-5 border-[rgba(255,255,255,0.06)] tilt-card">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b border-[var(--border-card)] pb-2 mb-3">
                <span className="text-[var(--text-primary)]">💳 payments</span>
                <span className="text-[var(--text-muted)]">Table</span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-[11px] text-[var(--text-secondary)]">
                <div className="flex justify-between"><span className="text-[var(--accent)] font-bold">PK | id</span><span>BIGINT</span></div>
                <div className="flex justify-between"><span>method</span><span>VARCHAR</span></div>
                <div className="flex justify-between"><span>amount</span><span>DOUBLE</span></div>
                <div className="flex justify-between"><span className="text-[#FBBF24] font-medium">FK | order_id</span><span>BIGINT</span></div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 text-xs font-mono text-center text-[var(--text-secondary)]">
            <strong>Cardinal Mappings:</strong> users (1) → (1) cart | users (1) → (N) orders | restaurants (1) → (N) food_items | orders (1) → (1) payments
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-20">
          <h4 className="text-xl font-bold font-heading text-[var(--text-primary)] text-center mb-2">Enterprise Security Mappings</h4>
          <p className="text-sm text-[var(--text-secondary)] text-center max-w-[600px] mx-auto mb-10">
            Multiple protective barriers inside the API server defend database assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div ref={sec1Ref} {...sec1Props} className="glass-card p-6 flex flex-col gap-3 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-xl text-[var(--accent)]"><Shield size={24} /></span>
              <h5 className="font-bold font-heading text-[var(--text-primary)]">JWT Authentication</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Validates incoming Authorization headers, extracts user details, and registers the session inside the Security Context.
              </p>
            </div>
            <div ref={sec2Ref} {...sec2Props} className="glass-card p-6 flex flex-col gap-3 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-xl text-[var(--accent)]"><Lock size={24} /></span>
              <h5 className="font-bold font-heading text-[var(--text-primary)]">Bcrypt Encryption</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Automatically hashes user password strings using strong random salt allocations before saving to relational storage.
              </p>
            </div>
            <div ref={sec3Ref} {...sec3Props} className="glass-card p-6 flex flex-col gap-3 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-xl text-[var(--accent)]"><Globe size={24} /></span>
              <h5 className="font-bold font-heading text-[var(--text-primary)]">CORS Restrictions</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Configures API security filters to refuse inputs from unverified origins, blocking cross-site request attacks.
              </p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="mb-20">
          <h4 className="text-xl font-bold font-heading text-[var(--text-primary)] text-center mb-2">Future Roadmap Enhancements</h4>
          <p className="text-sm text-[var(--text-secondary)] text-center max-w-[600px] mx-auto mb-10">
            Expanding the application to support higher transaction counts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div ref={road1Ref} {...road1Props} className="glass-card p-6 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-sm font-mono text-[var(--accent)] font-bold">Phase 1</span>
              <h5 className="font-bold font-heading text-[var(--text-primary)] mt-2 mb-1">Real-time tracking</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Integrating Google Maps SDK for distance computations and using WebSockets to push live updates.</p>
            </div>
            <div ref={road2Ref} {...road2Props} className="glass-card p-6 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-sm font-mono text-[var(--accent)] font-bold">Phase 2</span>
              <h5 className="font-bold font-heading text-[var(--text-primary)] mt-2 mb-1">Performance Cache</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Deploying Redis cache clusters to store restaurant menu directories, decreasing DB load.</p>
            </div>
            <div ref={road3Ref} {...road3Props} className="glass-card p-6 border-[rgba(255,255,255,0.06)] tilt-card">
              <span className="text-sm font-mono text-[var(--accent)] font-bold">Phase 3</span>
              <h5 className="font-bold font-heading text-[var(--text-primary)] mt-2 mb-1">Cloud Deployment</h5>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">Containerizing service binaries using Docker and setting up CI/CD pipelines for AWS container hosting.</p>
            </div>
          </div>
        </div>

        {/* Visual Showcase Gallery */}
        <div className="gallery-container grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8">
            <div className="browser-mockup border border-[var(--border-card)] rounded-2xl overflow-hidden bg-[var(--bg-main)] shadow-2xl">
              <div className="browser-bar bg-[rgba(255,255,255,0.02)] border-b border-[var(--border-card)] px-4 py-3 flex items-center justify-between">
                <div className="browser-dots flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>
                <div className="browser-address bg-[var(--bg-main)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)] px-6 py-1 rounded-lg font-mono">
                  {getAddressUrl()}
                </div>
                <div></div>
              </div>
              
              <div className="gallery-preview-viewport p-6 min-h-[300px] flex items-center justify-center bg-[rgba(255,255,255,0.01)]">
                {activeScreen === 'home' && (
                  <div className="w-full max-w-[450px] border border-[var(--border-card)] p-4 rounded-xl bg-[var(--bg-card)] flex flex-col gap-3">
                    <div className="flex justify-between items-center pb-2 border-b border-[var(--border-card)]">
                      <span className="font-bold text-xs">🍔 FreshEats</span>
                      <span className="w-4 h-4 bg-[var(--accent)] rounded-full"></span>
                    </div>
                    <div className="h-3 w-3/4 bg-gray-700 rounded"></div>
                    <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
                    <div className="grid grid-cols-3 gap-3 pt-3">
                      <div className="h-16 bg-gray-800 rounded border border-[var(--border-card)] flex flex-col items-center justify-center"><span className="text-lg">🍕</span><span className="text-[9px] text-[var(--text-secondary)]">Pizza</span></div>
                      <div className="h-16 bg-gray-800 rounded border border-[var(--border-card)] flex flex-col items-center justify-center"><span className="text-lg">🍔</span><span className="text-[9px] text-[var(--text-secondary)]">Burger</span></div>
                      <div className="h-16 bg-gray-800 rounded border border-[var(--border-card)] flex flex-col items-center justify-center"><span className="text-lg">🍰</span><span className="text-[9px] text-[var(--text-secondary)]">Cake</span></div>
                    </div>
                  </div>
                )}

                {activeScreen === 'restaurants' && (
                  <div className="w-full max-w-[450px] border border-[var(--border-card)] p-4 rounded-xl bg-[var(--bg-card)] flex flex-col gap-3">
                    <span className="font-bold text-xs pb-2 border-b border-[var(--border-card)]">🏢 Restaurant Directory</span>
                    <div className="flex justify-between items-center p-2 bg-gray-800/50 border border-[var(--border-card)] rounded-lg">
                      <span className="text-xs font-semibold">1. Pizza Palace</span>
                      <span className="text-[10px] bg-[#D8A7FF]/10 text-[#D8A7FF] px-2 py-0.5 rounded border border-[#D8A7FF]/20">⭐ 4.5</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-800/50 border border-[var(--border-card)] rounded-lg">
                      <span className="text-xs font-semibold">2. Burger Town</span>
                      <span className="text-[10px] bg-[#D8A7FF]/10 text-[#D8A7FF] px-2 py-0.5 rounded border border-[#D8A7FF]/20">⭐ 4.2</span>
                    </div>
                  </div>
                )}

                {activeScreen === 'menu' && (
                  <div className="w-full max-w-[450px] border border-[var(--border-card)] p-4 rounded-xl bg-[var(--bg-card)] flex flex-col gap-3">
                    <span className="font-bold text-xs pb-2 border-b border-[var(--border-card)]">🍕 Classic Margherita Pizza</span>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[var(--text-secondary)]">Fresh mozzarella, basil leaves, tomato puree</span>
                      <strong className="text-xs text-[var(--accent)]">₹299.00</strong>
                    </div>
                    <button className="bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] text-[10px] font-bold py-2 rounded-lg mt-2">Add To Cart</button>
                  </div>
                )}

                {activeScreen === 'db' && (
                  <div className="w-full max-w-[450px] border border-[var(--border-card)] p-4 rounded-xl bg-[var(--bg-card)] flex flex-col items-center gap-2 text-center">
                    <div className="w-12 h-12 rounded-lg bg-[#D8A7FF]/10 border border-[#D8A7FF]/20 text-[#D8A7FF] flex items-center justify-center mb-2"><Database size={24} /></div>
                    <span className="font-bold text-xs text-[var(--text-primary)]">Relational Catalog Manifest</span>
                    <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed max-w-[300px]">15+ entities and tables index configurations matching address books, role permissions, and order statuses.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { id: 'home', title: 'Storefront Home', desc: 'Customer Landing Portal' },
              { id: 'restaurants', title: 'Restaurant Listing', desc: 'Catalog Directory Search' },
              { id: 'menu', title: 'Food Menu Grid', desc: 'Shopping Cart Adding' },
              { id: 'db', title: 'MySQL Mapped Schemas', desc: 'Relational Entities' }
            ].map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id as any)}
                className={`gallery-thumb-btn w-full p-4 rounded-xl text-left transition-all duration-200 ${
                  activeScreen === screen.id
                    ? 'bg-[rgba(255,255,255,0.03)] border border-[var(--accent)] text-[var(--text-primary)]'
                    : 'bg-[var(--bg-card)] border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <h5 className="text-xs font-bold font-heading uppercase tracking-wider">{screen.title}</h5>
                <p className="text-[10px] text-[var(--text-muted)] mt-1">{screen.desc}</p>
              </button>
            ))}
          </div>

        </div>

        {/* Actions Button */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <a href="#" className="btn btn-primary bg-gradient-to-r from-[#D8A7FF] to-[#FBBF24] text-[#08070B] font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:scale-105 transition-all">Live Demo Hub</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-[var(--border-card)] transition-all">GitHub Repository</a>
          <a href="#" className="btn btn-secondary border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold text-xs px-5 py-2.5 rounded-xl hover:bg-[var(--border-card)] transition-all">REST API Docs</a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
