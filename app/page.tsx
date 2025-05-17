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
import PrintButton from "@/components/print-button"
import PageNumber from "@/components/page-number"

export default function BrochurePage() {
  return (
    <>
      <PrintButton />
      <div className="print-container">
        {/* 封面 */}
        <section className="cover page-break-after">
          <div className="cover-gradient"></div>
          <div className="cover-content">
            <div className="logo-container">
              <img src="/logo.svg" alt="RuiQi WAF" className="logo-shield" />
              <h1 className="logo-text">RuiQi WAF</h1>
            </div>
            <h2 className="main-title">企业级Web应用防火墙</h2>
            <p className="tagline">新一代WAF技术 · 全面安全防护 · 高性能设计</p>
            <div className="cover-badge">
              <div className="badge-icon">
                <Shield size={16} />
              </div>
              <span>OWASP Top 10 防护</span>
            </div>
          </div>
          <div className="cover-decoration"></div>
          <PageNumber pageNumber={1} />
        </section>

        {/* 产品概述 */}
        <section className="overview page-break-after">
          <div className="section-header">
            <div className="section-number">01</div>
            <h2 className="section-title">产品概述</h2>
          </div>

          <div className="overview-image" style={{ maxHeight: "280px", marginBottom: "25px" }}>
            <img src="/waf-zh.png" alt="RuiQi WAF 架构图" className="waf-architecture-img" style={{ maxHeight: "280px", borderRadius: "12px" }} />
          </div>

          <div className="overview-content">
            <div className="overview-text">
              <p className="lead-text">
                RuiQi WAF 融合 HAProxy 与 OWASP Coraza WAF 技术，为企业 Web 应用提供全方位安全防护。
              </p>
            </div>
          </div>

          <div className="feature-banner">
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Shield className="icon" />
              </div>
              <div className="feature-banner-text">全面安全防护</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Gauge className="icon" />
              </div>
              <div className="feature-banner-text">高性能低延迟</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Cloud className="icon" />
              </div>
              <div className="feature-banner-text">云原生架构</div>
            </div>
            <div className="feature-banner-item">
              <div className="feature-banner-icon">
                <Brain className="icon" />
              </div>
              <div className="feature-banner-text">大模型合规检测</div>
            </div>
          </div>

          <div className="design-philosophy">
            <h3 className="subsection-title">设计理念</h3>
            <div className="philosophy-container">
              <div className="philosophy-left">
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Shield className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">纵深防御</h4>
                    <p className="philosophy-desc">五阶段安全检测，构建立体防御体系</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Gauge className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">高性能</h4>
                    <p className="philosophy-desc">延迟 &lt; 5ms，每秒处理10,000+请求</p>
                  </div>
                </div>
              </div>
              <div className="philosophy-right">
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Zap className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">精准检测</h4>
                    <p className="philosophy-desc">多引擎检测，误报率 &lt; 0.1%</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <div className="philosophy-icon">
                    <Lock className="icon" />
                  </div>
                  <div className="philosophy-content">
                    <h4 className="philosophy-title">API安全</h4>
                    <p className="philosophy-desc">专业保护REST/GraphQL/SOAP API</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={2} />
        </section>

        {/* 多引擎架构 */}
        <section className="multi-engine page-break-after">
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">多引擎融合架构</h2>
          </div>

          <p className="lead-text">
            RuiQi WAF 采用创新的多引擎融合架构，结合高性能代理能力与深度安全检查，实现最佳性能与安全性平衡。
          </p>

          <div className="engines-showcase">
            <div className="engines-main">
              <div className="engine-card main-engine">
                <div className="engine-icon">
                  <Server className="icon" />
                </div>
                <h3 className="engine-title">HAProxy前端层</h3>
                <p className="engine-desc">高性能HTTP/HTTPS代理，支持TLS 1.3，提供智能流量分发</p>
              </div>
              <div className="engine-card main-engine">
                <div className="engine-icon">
                  <Shield className="icon" />
                </div>
                <h3 className="engine-title">Coraza WAF引擎</h3>
                <p className="engine-desc">兼容ModSecurity的新一代WAF引擎，支持OWASP CRS规则集</p>
              </div>
            </div>
            <div className="engines-secondary">
              <div className="engine-card">
                <div className="engine-icon">
                  <Cpu className="icon" />
                </div>
                <h3 className="engine-title">MicroEngine</h3>
                <p className="engine-desc">基于规则的IP过滤、URL检查和复杂条件逻辑引擎</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <Map className="icon" />
                </div>
                <h3 className="engine-title">地理分析引擎</h3>
                <p className="engine-desc">基于位置的流量过滤系统，识别地域攻击模式</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <BarChart className="icon" />
                </div>
                <h3 className="engine-title">速率限制引擎</h3>
                <p className="engine-desc">流量控制和请求限流机制，防止资源耗尽</p>
              </div>
              <div className="engine-card">
                <div className="engine-icon">
                  <Network className="icon" />
                </div>
                <h3 className="engine-title">SPOE通信机制</h3>
                <p className="engine-desc">高效通信协议，优化检测流程性能，确保安全检测与流量处理分离</p>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={3} />
        </section>

        {/* 全面保护功能 */}
        <section className="protection page-break-after">
          <div className="section-header">
            <div className="section-number">03</div>
            <h2 className="section-title">全面保护功能</h2>
          </div>

          <div className="protection-layout">
            <div className="protection-main">
              <div className="feature-highlight">
                <div className="feature-highlight-icon">
                  <Shield className="icon" />
                </div>
                <div className="feature-highlight-content">
                  <h3 className="feature-highlight-title">OWASP Top 10 防护</h3>
                  <p className="feature-highlight-desc">全面防御注入攻击、XSS、CSRF等关键Web漏洞，确保应用安全</p>
                  <div className="feature-highlight-tag">核心防护</div>
                </div>
              </div>

              <div className="feature-highlight">
                <div className="feature-highlight-icon">
                  <Bot className="icon" />
                </div>
                <div className="feature-highlight-content">
                  <h3 className="feature-highlight-title">机器人防护</h3>
                  <p className="feature-highlight-desc">智能区分善意爬虫与恶意机器人，防止数据抓取和自动化攻击</p>
                  <div className="feature-highlight-tag">高级功能</div>
                </div>
              </div>
            </div>

            <div className="protection-secondary">
              <div className="feature-card-alt">
                <div className="feature-card-alt-icon">
                  <Code className="icon" />
                </div>
                <h3 className="feature-card-alt-title">API安全</h3>
                <p className="feature-card-alt-desc">专业保护REST/GraphQL API，包括架构验证和异常检测</p>
              </div>

              <div className="feature-card-alt">
                <div className="feature-card-alt-icon">
                  <Power className="icon" />
                </div>
                <h3 className="feature-card-alt-title">虚拟补丁</h3>
                <p className="feature-card-alt-desc">无需修改应用代码，立即防御零日漏洞</p>
              </div>
            </div>
          </div>

          <div className="advanced-protection">
            <h3 className="subsection-title">高级威胁防御</h3>
            <div className="advanced-grid">
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">Web Shell检测</h4>
                  <p className="advanced-desc">精准识别各类Web Shell上传与执行行为</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">DNS隧道攻击防御</h4>
                  <p className="advanced-desc">检测并阻断通过DNS协议的数据渗透尝试</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">应用层DDoS缓解</h4>
                  <p className="advanced-desc">智能限制异常请求速率，保护应用资源</p>
                </div>
              </div>
              <div className="advanced-item">
                <div className="advanced-icon">
                  <CheckCircle className="check-icon" />
                </div>
                <div className="advanced-content">
                  <h4 className="advanced-title">全球IP信誉系统</h4>
                  <p className="advanced-desc">自动拦截已知恶意来源，提前阻断攻击</p>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={4} />
        </section>

        {/* 大模型合规检测 */}
        <section className="llm-compliance page-break-after">
          <div className="section-header">
            <div className="section-number">04</div>
            <h2 className="section-title">大模型合规检测</h2>
          </div>

          <div className="llm-intro">
            <div className="llm-intro-text">
              <p className="lead-text">
                随着大语言模型(LLM)在企业中的广泛应用，RuiQi
                WAF提供专业的API安全防护和合规检测能力，确保大模型应用安全可控。
              </p>
            </div>
            <div className="llm-intro-icon">
              <Brain className="brain-icon" />
            </div>
          </div>

          <div className="llm-features">
            <div className="llm-feature-left">
              <div className="llm-feature-card">
                <div className="llm-feature-icon">
                  <Brain className="icon" />
                </div>
                <h3 className="llm-feature-title">提示词注入防护</h3>
                <p className="llm-feature-desc">检测并阻断恶意提示词注入攻击，防止模型被操纵执行非预期行为</p>
              </div>
              <div className="llm-feature-card">
                <div className="llm-feature-icon">
                  <Database className="icon" />
                </div>
                <h3 className="llm-feature-title">敏感信息过滤</h3>
                <p className="llm-feature-desc">识别并过滤提示词和响应中的敏感数据，防止隐私信息泄露</p>
              </div>
            </div>
            <div className="llm-feature-right">
              <div className="llm-feature-card">
                <div className="llm-feature-icon">
                  <Lock className="icon" />
                </div>
                <h3 className="llm-feature-title">合规性审计</h3>
                <p className="llm-feature-desc">记录并审计所有模型交互，支持合规性要求和事后追溯分析</p>
              </div>
              <div className="llm-feature-card">
                <div className="llm-feature-icon">
                  <Shield className="icon" />
                </div>
                <h3 className="llm-feature-title">输出安全检查</h3>
                <p className="llm-feature-desc">分析模型响应内容，过滤有害、违规或不当信息</p>
              </div>
            </div>
          </div>

          <div className="llm-workflow">
            <h3 className="subsection-title">大模型API防护流程</h3>
            <div className="workflow-container">
              <div className="workflow-step-container">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4 className="step-title">请求前检查</h4>
                    <p className="step-desc">分析用户提示词，检测注入攻击和敏感信息</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4 className="step-title">请求合规转换</h4>
                    <p className="step-desc">对不合规提示词进行安全转换或拒绝处理</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4 className="step-title">响应内容分析</h4>
                    <p className="step-desc">检查模型输出是否包含有害或违规内容</p>
                  </div>
                </div>
              </div>
              <div className="workflow-step-container">
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4 className="step-title">响应安全处理</h4>
                    <p className="step-desc">过滤或屏蔽不合规内容，确保输出安全</p>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4 className="step-title">全程审计记录</h4>
                    <p className="step-desc">记录交互全过程，支持合规审计和分析</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={5} />
        </section>

        {/* 五阶段处理模型 */}
        <section className="processing-model-section page-break-after">
          <div className="section-header">
            <div className="section-number">05</div>
            <h2 className="section-title">五阶段处理模型</h2>
          </div>

          <p className="lead-text">
            RuiQi WAF 基于 Coraza 的五阶段处理模型，在 HTTP 请求/响应生命周期的每个关键节点实施精准安全检测。
          </p>

          <div className="processing-model-compact">
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4 className="step-title">请求头处理</h4>
                  <p className="step-desc">分析HTTP连接元数据、URI、GET参数及请求头信息，拦截恶意请求</p>
                </div>
              </div>
              <div className="processing-step-compact">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4 className="step-title">请求体处理</h4>
                  <p className="step-desc">深度检测POST参数、多部分表单数据、JSON/XML内容及原始请求体</p>
                </div>
              </div>
            </div>
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4 className="step-title">响应头处理</h4>
                  <p className="step-desc">验证响应状态码和响应头信息，防止信息泄露</p>
                </div>
              </div>
              <div className="processing-step-compact">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4 className="step-title">响应体处理</h4>
                  <p className="step-desc">分析原始响应体内容，阻止敏感数据外泄</p>
                </div>
              </div>
            </div>
            <div className="processing-steps-row">
              <div className="processing-step-compact">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4 className="step-title">日志记录阶段</h4>
                  <p className="step-desc">评估最终规则、保存持久性集合并记录完整安全事件审计</p>
                </div>
              </div>
            </div>
          </div>

          <div className="deployment-options">
            <h3 className="subsection-title">灵活部署方案</h3>
            <div className="deployment-grid-compact">
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Globe className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">边缘部署</h3>
                  <p className="deployment-desc">网络边缘第一道防线，拦截外部攻击</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Server className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">应用前置</h3>
                  <p className="deployment-desc">直接保护应用服务器，提供精准安全控制</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Layers className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">分层保护</h3>
                  <p className="deployment-desc">边缘+应用前置双重防护，实现纵深防御</p>
                </div>
              </div>
              <div className="deployment-card-compact">
                <div className="deployment-icon">
                  <Grid className="icon" />
                </div>
                <div className="deployment-content">
                  <h3 className="deployment-title">服务网格</h3>
                  <p className="deployment-desc">无缝接入Istio/Linkerd，保护微服务通信</p>
                </div>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={6} />
        </section>

        {/* 产品规格参数 */}
        <section className="specifications page-break-after">
          <div className="section-header">
            <div className="section-number">06</div>
            <h2 className="section-title">产品规格参数</h2>
          </div>

          <div className="specs-container">
            <div className="specs-left">
              <div className="specs-card-alt">
                <h3 className="specs-title">性能指标</h3>
                <ul className="specs-list">
                  <li>
                    <span className="specs-highlight">延迟影响：</span>小于5ms/请求
                  </li>
                  <li>
                    <span className="specs-highlight">请求处理：</span>10,000+ HTTP请求/秒
                  </li>
                  <li>
                    <span className="specs-highlight">并发连接：</span>单节点支持100,000+
                  </li>
                  <li>
                    <span className="specs-highlight">故障切换：</span>自动切换时间&lt;10秒
                  </li>
                </ul>
              </div>
              <div className="specs-card-alt">
                <h3 className="specs-title">支持协议</h3>
                <ul className="specs-list">
                  <li>HTTP/1.x、HTTP/2、HTTP/3</li>
                  <li>WebSocket</li>
                  <li>HTTPS(SNI)</li>
                  <li>REST/GraphQL/SOAP API</li>
                </ul>
              </div>
            </div>
            <div className="specs-right">
              <div className="specs-card-alt">
                <h3 className="specs-title">部署选项</h3>
                <ul className="specs-list">
                  <li>容器化：Docker、Kubernetes</li>
                  <li>虚拟化：VMware、KVM、Hyper-V</li>
                  <li>操作系统：CentOS/RHEL 7+、Ubuntu 18.04+</li>
                  <li>云平台：AWS、Azure、阿里云、腾讯云等</li>
                </ul>
              </div>
              <div className="specs-card-alt">
                <h3 className="specs-title">安全功能</h3>
                <ul className="specs-list">
                  <li>OWASP Top 10防护</li>
                  <li>机器人行为分析</li>
                  <li>API安全验证</li>
                  <li>虚拟补丁</li>
                </ul>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={7} />
        </section>

        {/* 环境支持 */}
        <section className="environment-section page-break-after">
          <div className="section-header">
            <div className="section-number">07</div>
            <h2 className="section-title">环境支持</h2>
          </div>

          <p className="lead-text">
            RuiQi WAF
            提供广泛的环境兼容性，支持多种操作系统、云平台、容器环境和通信协议，确保在各种IT基础设施中无缝部署。
          </p>

          <div className="environment-container">
            <div className="environment-row">
              <div className="environment-card-alt">
                <h4 className="environment-title">操作系统</h4>
                <ul className="environment-list">
                  <li>CentOS/RHEL 7+</li>
                  <li>Ubuntu 18.04+</li>
                  <li>Debian 10+</li>
                  <li>Windows Server 2016+</li>
                  <li>麒麟操作系统(Kylinos)</li>
                </ul>
              </div>
              <div className="environment-card-alt">
                <h4 className="environment-title">云平台</h4>
                <ul className="environment-list">
                  <li>AWS、Azure、GCP</li>
                  <li>阿里云、腾讯云</li>
                  <li>华为云、百度云</li>
                  <li>Sealos云、京东云</li>
                </ul>
              </div>
            </div>
            <div className="environment-row">
              <div className="environment-card-alt">
                <h4 className="environment-title">容器支持</h4>
                <ul className="environment-list">
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>OpenShift</li>
                  <li>Rancher</li>
                </ul>
              </div>
              <div className="environment-card-alt">
                <h4 className="environment-title">支持协议</h4>
                <ul className="environment-list">
                  <li>HTTP/1.x、HTTP/2、HTTP/3</li>
                  <li>WebSocket</li>
                  <li>HTTPS(SNI)</li>
                  <li>gRPC</li>
                </ul>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={8} />
        </section>

        {/* 行业应用场景 */}
        <section className="industry-scenarios">
          <div className="section-header">
            <div className="section-number">08</div>
            <h2 className="section-title">行业应用场景</h2>
          </div>

          <div className="scenarios-container">
            <div className="scenarios-row">
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg finance-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">金融行业</h3>
                  <ul className="scenario-list">
                    <li>网银与移动银行保护</li>
                    <li>金融交易系统防护</li>
                    <li>开放银行API安全</li>
                  </ul>
                </div>
              </div>
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg gov-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">政府与公共服务</h3>
                  <ul className="scenario-list">
                    <li>政务门户安全防护</li>
                    <li>公共服务平台保障</li>
                    <li>等保合规保障</li>
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
                  <h3 className="scenario-title">电子商务</h3>
                  <ul className="scenario-list">
                    <li>交易系统安全防护</li>
                    <li>账户安全保障</li>
                    <li>大促活动安全</li>
                  </ul>
                </div>
              </div>
              <div className="scenario-card-alt">
                <div className="scenario-icon">
                  <div className="scenario-icon-bg health-icon"></div>
                </div>
                <div className="scenario-content">
                  <h3 className="scenario-title">医疗健康</h3>
                  <ul className="scenario-list">
                    <li>患者门户安全</li>
                    <li>医疗信息系统防护</li>
                    <li>远程医疗平台保护</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-header">
              <h3 className="contact-title">联系我们</h3>
            </div>
            <div className="contact-content">
              <div className="contact-item">
                <span className="contact-label">官方网站：</span>
                <span className="contact-value">github.com/HUAHUAI23/RuiQi</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">咨询热线：</span>
                <span className="contact-value">18679200828</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">技术支持：</span>
                <span className="contact-value">github.com/HUAHUAI23/RuiQi/issues</span>
              </div>
            </div>
          </div>
          <PageNumber pageNumber={9} />
        </section>
      </div>
    </>
  )
}
