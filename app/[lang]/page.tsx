import {
  Shield,
  Gauge,
  Cloud,
  Bot,
  Code,
  Power,
  Globe,
  Server,
  Layers,
  Grid,
  Lock,
  Zap,
  Brain,
  Database,
  Cpu,
  Network,
  Map,
  BarChart,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import PrintButton from "@/components/print-button"
import PageNumber from "@/components/page-number"
import LanguageSwitcher from "@/components/language-switcher"
import { getDictionary, isValidLocale, defaultLocale, getTranslation, getTranslationArray } from "@/lib/i18n"

export default async function BrochurePage({
  params
}: {
  params: { lang: string }
}) {
  // Await the params object directly before accessing its properties
  const { lang: paramLang } = await params
  const lang = isValidLocale(paramLang) ? paramLang : defaultLocale
  const dict = await getDictionary(lang)
  
  // Helper function to get translations using dot notation
  const t = (path: string, fallback = '') => getTranslation(dict, path, fallback)
  // Helper function to get array translations
  const tArray = (path: string) => getTranslationArray(dict, path)

  return (
    <>
      <PrintButton label={t('printButton')} />
      <LanguageSwitcher />
      <div className="print-container">
        {/* 封面 */}
        <section className="cover page-break-after">
          <div className="cover-gradient"></div>
          <div className="cover-content">
            <div className="logo-container">
              <img src="/logo.svg" alt="RuiQi WAF" className="logo-shield" />
              <h1 className="logo-text">RuiQi WAF</h1>
            </div>
            <h2 className="main-title">{t('cover.mainTitle')}</h2>
            <p className="tagline">{t('cover.tagline')}</p>
            <div className="cover-badge">
              <div className="badge-icon">
                <Shield size={16} />
              </div>
              <span>{t('cover.badge')}</span>
            </div>
          </div>
          <div className="cover-decoration"></div>
          <PageNumber pageNumber={1} />
        </section>

        {/* 产品概述 */}
        <section className="overview page-break-after">
          <div className="section-header">
            <div className="section-number">01</div>
            <h2 className="section-title">{t('overview.sectionTitle')}</h2>
          </div>

          <div className="overview-image" style={{ maxHeight: "280px", marginBottom: "25px" }}>
            <img 
              src={lang === 'en' ? "/waf-en.png" : "/waf-zh.png"} 
              alt="RuiQi WAF Architecture" 
              className="waf-architecture-img" 
              style={{ maxHeight: "280px", borderRadius: "12px" }} 
            />
          </div>

          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">
                {t('overview.leadText')}
              </p>
            </div>
          </div>

          <div className="feature-banner">
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Shield className="icon" />
              </div>
              <div className="feature-banner-text">{t('overview.featureBanner.security')}</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Gauge className="icon" />
              </div>
              <div className="feature-banner-text">{t('overview.featureBanner.performance')}</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Cloud className="icon" />
              </div>
              <div className="feature-banner-text">{t('overview.featureBanner.cloud')}</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Brain className="icon" />
              </div>
              <div className="feature-banner-text">{t('overview.featureBanner.llm')}</div>
            </div>
          </div>

          <div className="design-philosophy">
            <h3 className="subsection-title">{t('overview.designPhilosophy.title')}</h3>
            <div className="philosophy-container">
              <div className="philosophy-left">
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Shield className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">{t('overview.designPhilosophy.defense.title')}</h4>
                    <p className="philosophy-desc">{t('overview.designPhilosophy.defense.desc')}</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Gauge className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">{t('overview.designPhilosophy.performance.title')}</h4>
                    <p className="philosophy-desc">{t('overview.designPhilosophy.performance.desc')}</p>
                  </div>
                </div>
              </div>
              <div className="philosophy-right">
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Zap className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">{t('overview.designPhilosophy.detection.title')}</h4>
                    <p className="philosophy-desc">{t('overview.designPhilosophy.detection.desc')}</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Lock className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">{t('overview.designPhilosophy.api.title')}</h4>
                    <p className="philosophy-desc">{t('overview.designPhilosophy.api.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={2} />
        </section>

        {/* Multi-Engine Architecture */}
        <section className="multi-engine page-break-after">
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">{t('multiEngine.sectionTitle')}</h2>
          </div>

          <p className="lead-text">
            {t('multiEngine.leadText')}
          </p>

          <div className="engines-showcase">
            <div className="engines-main">
              <div className="engine-card main-engine">
                <div className="engine-icon">
                  <Server className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.haProxy.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.haProxy.desc')}</p>
              </div>
              <div className="engine-card main-engine">
                <div className="engine-icon">
                  <Shield className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.corazaWaf.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.corazaWaf.desc')}</p>
              </div>
            </div>
            <div className="engines-secondary">
              <div className="engine-card">
                <div className="engine-icon">
                  <Cpu className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.microEngine.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.microEngine.desc')}</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <Map className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.geoAnalysis.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.geoAnalysis.desc')}</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <BarChart className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.rateLimit.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.rateLimit.desc')}</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <Network className="icon" />
                </div>
                <h3 className="engine-title">{t('multiEngine.engines.spoe.title')}</h3>
                <p className="engine-desc">{t('multiEngine.engines.spoe.desc')}</p>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={3} />
        </section>

        {/* Comprehensive Protection */}
        <section className="protection page-break-after">
          <div className="section-header">
            <div className="section-number">03</div>
            <h2 className="section-title">{t('protection.sectionTitle')}</h2>
          </div>

          <div className="protection-layout">
            <div className="protection-main">
              <div className="feature-highlight">
                <div className="feature-highlight-icon">
                  <Shield className="icon" />
                </div>
                <div className="feature-highlight-content">
                  <h3 className="feature-highlight-title">{t('protection.features.owaspTop10.title')}</h3>
                  <p className="feature-highlight-desc">{t('protection.features.owaspTop10.desc')}</p>
                  <div className="feature-highlight-tag">{t('protection.features.owaspTop10.tag')}</div>
                </div>
              </div>

              <div className="feature-highlight">
                <div className="feature-highlight-icon">
                  <Bot className="icon" />
                </div>
                <div className="feature-highlight-content">
                  <h3 className="feature-highlight-title">{t('protection.features.botProtection.title')}</h3>
                  <p className="feature-highlight-desc">{t('protection.features.botProtection.desc')}</p>
                  <div className="feature-highlight-tag">{t('protection.features.botProtection.tag')}</div>
                </div>
              </div>
            </div>

            <div className="protection-secondary">
              <div className="feature-card-alt">
                <div className="feature-card-alt-icon">
                  <Code className="icon" />
                </div>
                <h3 className="feature-card-alt-title">{t('protection.features.apiSecurity.title')}</h3>
                <p className="feature-card-alt-desc">{t('protection.features.apiSecurity.desc')}</p>
              </div>

              <div className="feature-card-alt">
                <div className="feature-card-alt-icon">
                  <Power className="icon" />
                </div>
                <h3 className="feature-card-alt-title">{t('protection.features.virtualPatching.title')}</h3>
                <p className="feature-card-alt-desc">{t('protection.features.virtualPatching.desc')}</p>
              </div>
            </div>
          </div>

          <div className="advanced-protection">
            <h3 className="subsection-title">{t('protection.advancedProtection.title')}</h3>
            <div className="advanced-grid">
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">{t('protection.advancedProtection.webShell.title')}</h4>
                  <p className="advanced-desc">{t('protection.advancedProtection.webShell.desc')}</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">{t('protection.advancedProtection.dnsTunnel.title')}</h4>
                  <p className="advanced-desc">{t('protection.advancedProtection.dnsTunnel.desc')}</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">{t('protection.advancedProtection.ddos.title')}</h4>
                  <p className="advanced-desc">{t('protection.advancedProtection.ddos.desc')}</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">{t('protection.advancedProtection.ipReputation.title')}</h4>
                  <p className="advanced-desc">{t('protection.advancedProtection.ipReputation.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={4} />
        </section>

        {/* LLM Compliance */}
        <section className={`llm-compliance page-break-after ${lang === 'en' ? 'en-llm-compliance' : ''}`}>
          <div className="section-header">
            <div className="section-number">04</div>
            <h2 className="section-title">{t('llmCompliance.sectionTitle')}</h2>
          </div>

          <div className="llm-intro">
            <div className="llm-intro-text">
              <p className="lead-text">
                {t('llmCompliance.leadText')}
              </p>
            </div>
            <div className="llm-intro-icon">
              <Brain className={`brain-icon ${lang === 'en' ? 'en-brain-icon' : ''}`} />
            </div>
          </div>

          <div className="llm-features">
            <div className="llm-feature-left">
              <div className={`llm-feature-card ${lang === 'en' ? 'en-llm-feature-card' : ''}`}>
                <div className="llm-feature-icon">
                  <Brain className="icon" />
                </div>
                <h3 className={`llm-feature-title ${lang === 'en' ? 'en-feature-title' : ''}`}>{t('llmCompliance.features.promptInjection.title')}</h3>
                <p className={`llm-feature-desc ${lang === 'en' ? 'en-feature-desc' : ''}`}>{t('llmCompliance.features.promptInjection.desc')}</p>
              </div>
              <div className={`llm-feature-card ${lang === 'en' ? 'en-llm-feature-card' : ''}`}>
                <div className="llm-feature-icon">
                  <Database className="icon" />
                </div>
                <h3 className={`llm-feature-title ${lang === 'en' ? 'en-feature-title' : ''}`}>{t('llmCompliance.features.sensitiveInfo.title')}</h3>
                <p className={`llm-feature-desc ${lang === 'en' ? 'en-feature-desc' : ''}`}>{t('llmCompliance.features.sensitiveInfo.desc')}</p>
              </div>
            </div>
            <div className="llm-feature-right">
              <div className={`llm-feature-card ${lang === 'en' ? 'en-llm-feature-card' : ''}`}>
                <div className="llm-feature-icon">
                  <Lock className="icon" />
                </div>
                <h3 className={`llm-feature-title ${lang === 'en' ? 'en-feature-title' : ''}`}>{t('llmCompliance.features.compliance.title')}</h3>
                <p className={`llm-feature-desc ${lang === 'en' ? 'en-feature-desc' : ''}`}>{t('llmCompliance.features.compliance.desc')}</p>
              </div>
              <div className={`llm-feature-card ${lang === 'en' ? 'en-llm-feature-card' : ''}`}>
                <div className="llm-feature-icon">
                  <Shield className="icon" />
                </div>
                <h3 className={`llm-feature-title ${lang === 'en' ? 'en-feature-title' : ''}`}>{t('llmCompliance.features.outputCheck.title')}</h3>
                <p className={`llm-feature-desc ${lang === 'en' ? 'en-feature-desc' : ''}`}>{t('llmCompliance.features.outputCheck.desc')}</p>
              </div>
            </div>
          </div>

          <div className={`llm-workflow ${lang === 'en' ? 'en-llm-workflow' : ''}`}>
            <h3 className={`subsection-title ${lang === 'en' ? 'en-subsection-title' : ''}`}>{t('llmCompliance.workflow.title')}</h3>
            <div className={`workflow-container ${lang === 'en' ? 'en-workflow-container' : ''}`}>
              <div className={`workflow-step-container ${lang === 'en' ? 'en-workflow-step-container' : ''}`}>
                <div className={`workflow-step ${lang === 'en' ? 'en-workflow-step' : ''}`}>
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4 className={`step-title ${lang === 'en' ? 'en-step-title' : ''}`}>{t('llmCompliance.workflow.step1.title')}</h4>
                    <p className={`step-desc ${lang === 'en' ? 'en-step-desc' : ''}`}>{t('llmCompliance.workflow.step1.desc')}</p>
                  </div>
                </div>
                <div className={`workflow-step ${lang === 'en' ? 'en-workflow-step' : ''}`}>
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4 className={`step-title ${lang === 'en' ? 'en-step-title' : ''}`}>{t('llmCompliance.workflow.step2.title')}</h4>
                    <p className={`step-desc ${lang === 'en' ? 'en-step-desc' : ''}`}>{t('llmCompliance.workflow.step2.desc')}</p>
                  </div>
                </div>
                <div className={`workflow-step ${lang === 'en' ? 'en-workflow-step' : ''}`}>
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4 className={`step-title ${lang === 'en' ? 'en-step-title' : ''}`}>{t('llmCompliance.workflow.step3.title')}</h4>
                    <p className={`step-desc ${lang === 'en' ? 'en-step-desc' : ''}`}>{t('llmCompliance.workflow.step3.desc')}</p>
                  </div>
                </div>
              </div>
              <div className={`workflow-step-container ${lang === 'en' ? 'en-workflow-step-container' : ''}`}>
                <div className={`workflow-step ${lang === 'en' ? 'en-workflow-step' : ''}`}>
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4 className={`step-title ${lang === 'en' ? 'en-step-title' : ''}`}>{t('llmCompliance.workflow.step4.title')}</h4>
                    <p className={`step-desc ${lang === 'en' ? 'en-step-desc' : ''}`}>{t('llmCompliance.workflow.step4.desc')}</p>
                  </div>
                </div>
                <div className={`workflow-step ${lang === 'en' ? 'en-workflow-step' : ''}`}>
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4 className={`step-title ${lang === 'en' ? 'en-step-title' : ''}`}>{t('llmCompliance.workflow.step5.title')}</h4>
                    <p className={`step-desc ${lang === 'en' ? 'en-step-desc' : ''}`}>{t('llmCompliance.workflow.step5.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={5} />
        </section>

        {/* Five-Stage Processing Model */}
        <section className="processing-model-section page-break-after">
          <div className="section-header">
            <div className="section-number">05</div>
            <h2 className="section-title">{t('processingModel.sectionTitle')}</h2>
          </div>

          <p className="lead-text">
            {t('processingModel.leadText')}
          </p>

          <div className="processing-model-compact">
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4 className="step-title">{t('processingModel.steps.step1.title')}</h4>
                  <p className="step-desc">{t('processingModel.steps.step1.desc')}</p>
                </div>
              </div>
              <div className="processing-step-compact">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4 className="step-title">{t('processingModel.steps.step2.title')}</h4>
                  <p className="step-desc">{t('processingModel.steps.step2.desc')}</p>
                </div>
              </div>
            </div>
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4 className="step-title">{t('processingModel.steps.step3.title')}</h4>
                  <p className="step-desc">{t('processingModel.steps.step3.desc')}</p>
                </div>
              </div>
              <div className="processing-step-compact">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4 className="step-title">{t('processingModel.steps.step4.title')}</h4>
                  <p className="step-desc">{t('processingModel.steps.step4.desc')}</p>
                </div>
              </div>
            </div>
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4 className="step-title">{t('processingModel.steps.step5.title')}</h4>
                  <p className="step-desc">{t('processingModel.steps.step5.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="deployment-options">
            <h3 className="subsection-title">{t('processingModel.deployment.title')}</h3>
            <div className="deployment-grid-compact">
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Globe className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">{t('processingModel.deployment.edge.title')}</h3>
                  <p className="deployment-desc">{t('processingModel.deployment.edge.desc')}</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Server className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">{t('processingModel.deployment.appFront.title')}</h3>
                  <p className="deployment-desc">{t('processingModel.deployment.appFront.desc')}</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Layers className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">{t('processingModel.deployment.layered.title')}</h3>
                  <p className="deployment-desc">{t('processingModel.deployment.layered.desc')}</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Grid className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">{t('processingModel.deployment.serviceMesh.title')}</h3>
                  <p className="deployment-desc">{t('processingModel.deployment.serviceMesh.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={6} />
        </section>

        {/* Product Specifications */}
        <section className="specifications page-break-after">
          <div className="section-header">
            <div className="section-number">06</div>
            <h2 className="section-title">{t('specifications.sectionTitle')}</h2>
          </div>

          <div className="specs-container">
            <div className="specs-left">
              <div className="specs-card-alt">
                <h3 className="specs-title">{t('specifications.performance.title')}</h3>
                <ul className="specs-list">
                  <li>
                    <span className="specs-highlight">{t('specifications.performance.latency')}</span>
                  </li>
                  <li>
                    <span className="specs-highlight">{t('specifications.performance.requests')}</span>
                  </li>
                  <li>
                    <span className="specs-highlight">{t('specifications.performance.connections')}</span>
                  </li>
                  <li>
                    <span className="specs-highlight">{t('specifications.performance.failover')}</span>
                  </li>
                </ul>
              </div>
              <div className="specs-card-alt">
                <h3 className="specs-title">{t('specifications.protocols.title')}</h3>
                <ul className="specs-list">
                  <li>{t('specifications.protocols.http')}</li>
                  <li>{t('specifications.protocols.websocket')}</li>
                  <li>{t('specifications.protocols.https')}</li>
                  <li>{t('specifications.protocols.api')}</li>
                </ul>
              </div>
            </div>
            <div className="specs-right">
              <div className="specs-card-alt">
                <h3 className="specs-title">{t('specifications.deployment.title')}</h3>
                <ul className="specs-list">
                  <li>{t('specifications.deployment.container')}</li>
                  <li>{t('specifications.deployment.virtualization')}</li>
                  <li>{t('specifications.deployment.os')}</li>
                  <li>{t('specifications.deployment.cloud')}</li>
                </ul>
              </div>
              <div className="specs-card-alt">
                <h3 className="specs-title">{t('specifications.securityFeatures.title')}</h3>
                <ul className="specs-list">
                  <li>{t('specifications.securityFeatures.owasp')}</li>
                  <li>{t('specifications.securityFeatures.bot')}</li>
                  <li>{t('specifications.securityFeatures.api')}</li>
                  <li>{t('specifications.securityFeatures.patching')}</li>
                </ul>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={7} />
        </section>

        {/* Environment Support */}
        <section className="environment-section page-break-after">
          <div className="section-header">
            <div className="section-number">07</div>
            <h2 className="section-title">{t('environment.sectionTitle')}</h2>
          </div>

          <p className="lead-text">
            {t('environment.leadText')}
          </p>

          <div className="environment-container">
            <div className="environment-row">
              <div className="environment-card-alt">
                <h4 className="environment-title">{t('environment.os.title')}</h4>
                <ul className="environment-list">
                  {tArray('environment.os.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="environment-card-alt">
                <h4 className="environment-title">{t('environment.cloud.title')}</h4>
                <ul className="environment-list">
                  {tArray('environment.cloud.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="environment-row">
              <div className="environment-card-alt">
                <h4 className="environment-title">{t('environment.container.title')}</h4>
                <ul className="environment-list">
                  {tArray('environment.container.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="environment-card-alt">
                <h4 className="environment-title">{t('environment.protocols.title')}</h4>
                <ul className="environment-list">
                  {tArray('environment.protocols.items').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={8} />
        </section>

        {/* Industry Application Scenarios */}
        <section className="industry-scenarios">
          <div className="section-header">
            <div className="section-number">08</div>
            <h2 className="section-title">{t('scenarios.sectionTitle')}</h2>
          </div>

          <div className="scenarios-container">
            <div className="scenarios-row">
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg finance-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">{t('scenarios.finance.title')}</h3>
                  <ul className="scenario-list">
                    {tArray('scenarios.finance.items').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg gov-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">{t('scenarios.government.title')}</h3>
                  <ul className="scenario-list">
                    {tArray('scenarios.government.items').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="scenarios-row">
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg ecom-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">{t('scenarios.ecommerce.title')}</h3>
                  <ul className="scenario-list">
                    {tArray('scenarios.ecommerce.items').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg health-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">{t('scenarios.healthcare.title')}</h3>
                  <ul className="scenario-list">
                    {tArray('scenarios.healthcare.items').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`contact-info ${lang === 'en' ? 'en-contact-info' : ''}`}>
            <div className={`contact-header ${lang === 'en' ? 'en-contact-header' : ''}`}>
              <h3 className={`contact-title ${lang === 'en' ? 'en-contact-title' : ''}`}>{t('contact.title')}</h3>
            </div>
            <div className={`contact-content ${lang === 'en' ? 'en-contact-content' : ''}`}>
              <div className={`contact-item ${lang === 'en' ? 'en-contact-item' : ''}`}>
                <span className={`contact-label ${lang === 'en' ? 'en-contact-label' : ''}`}>{t('contact.website')}</span>
                <span className={`contact-value ${lang === 'en' ? 'en-contact-value' : ''}`}>{t('contact.websiteValue')}</span>
              </div>
              <div className={`contact-item ${lang === 'en' ? 'en-contact-item' : ''}`}>
                <span className={`contact-label ${lang === 'en' ? 'en-contact-label' : ''}`}>{t('contact.phone')}</span>
                <span className={`contact-value ${lang === 'en' ? 'en-contact-value' : ''}`}>{t('contact.phoneValue')}</span>
              </div>
              <div className={`contact-item ${lang === 'en' ? 'en-contact-item' : ''}`}>
                <span className={`contact-label ${lang === 'en' ? 'en-contact-label' : ''}`}>{t('contact.support')}</span>
                <span className={`contact-value ${lang === 'en' ? 'en-contact-value' : ''}`}>{t('contact.supportValue')}</span>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={9} />
        </section>
      </div>
    </>
  )
} 