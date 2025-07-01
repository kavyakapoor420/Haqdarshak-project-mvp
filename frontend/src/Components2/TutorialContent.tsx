"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../Components/ui/card'
import { Badge } from '../Components/ui/badge'
import { Button } from '../Components/ui/button'
import { Alert, AlertDescription } from '../Components/ui/alert'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb,
  Terminal,
  Globe,
  Server,
  Code2,
  Zap,
  BarChart3,
  Target,
  BookOpen,
  Settings,
} from "lucide-react"
import { CodeBlock } from './CodeBlock'
import { PrerequisiteCard } from './PrerequesistivCard'
import { StepCard } from './StepCard'

interface TutorialContentProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function TutorialContent({ currentStep, onStepChange }: TutorialContentProps) {
  const nextStep = () => {
    if (currentStep < 7) onStepChange(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) onStepChange(currentStep - 1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <IntroductionStep />
      case 1:
        return <SetupSigNozStep />
      case 2:
        return <CreateNodeAppStep />
      case 3:
        return <OpenTelemetryStep />
      case 4:
        return <ConfigureCollectorStep />
      case 5:
        return <VerifyDataStep />
      case 6:
        return <BestPracticesStep />
      case 7:
        return <ConclusionStep />
      default:
        return <IntroductionStep />
    }
  }

  return (
    <div className="space-y-8">
      {renderStepContent()}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Step {currentStep + 1} of 8</span>
        </div>

        <Button onClick={nextStep} disabled={currentStep === 7} className="flex items-center gap-2">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function IntroductionStep() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <BookOpen className="h-4 w-4" />
          Tutorial Introduction
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          From Zero to Observable
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Setting Up Observability with OpenTelemetry and SigNoz
        </p>
      </div>

      <Alert className="border-blue-200 bg-blue-50">
        <Lightbulb className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          This guide is designed for developers new to observability but familiar with coding and deployment. We'll
          break down each step and explain technical concepts in simple terms.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Prerequisites
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <PrerequisiteCard
              icon={<Server className="h-5 w-5" />}
              title="Docker"
              description="For self-hosting SigNoz"
              link="https://docs.docker.com/get-docker/"
            />
            <PrerequisiteCard
              icon={<Code2 className="h-5 w-5" />}
              title="Node.js v12+"
              description="Runtime environment"
              link="https://nodejs.org/en/download/"
            />
            <PrerequisiteCard
              icon={<Terminal className="h-5 w-5" />}
              title="Git"
              description="For cloning repositories"
              link="https://git-scm.com/downloads"
            />
            <PrerequisiteCard
              icon={<BarChart3 className="h-5 w-5" />}
              title="4GB Memory"
              description="Allocated to Docker"
            />
          </div>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Required Ports:</strong> Ensure ports 3301 (SigNoz dashboard), 4317 (OTLP gRPC), and 4318 (OTLP
              HTTP) are open and available.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <Server className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Self-host SigNoz</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
              <Zap className="h-5 w-5 text-green-600" />
              <span className="font-medium">OpenTelemetry Integration</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Monitor Applications</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-red-50">
              <Target className="h-5 w-5 text-orange-600" />
              <span className="font-medium">Best Practices</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SetupSigNozStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={1}
        title="Set Up SigNoz"
        description="Install and configure your observability backend"
        icon={<Server className="h-6 w-6" />}
      />

      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          SigNoz is the backend where your telemetry data will be stored and visualized. We'll use self-hosting for more
          control over your data.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Clone SigNoz Repository
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            language="bash"
            code={`git clone -b main https://github.com/SigNoz/signoz.git
cd signoz/deploy/`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Install SigNoz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">For macOS and supported Linux distributions:</h4>
              <CodeBlock language="bash" code="./install.sh" />
            </div>

            <div>
              <h4 className="font-semibold mb-2">For other Linux distributions (using Docker Compose):</h4>
              <CodeBlock language="bash" code="docker compose up -d --remove-orphans" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Verify Installation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="mb-2">Check if SigNoz containers are running:</p>
            <CodeBlock language="bash" code="docker ps" />
          </div>

          <Alert className="border-green-200 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Access the SigNoz dashboard at <strong>http://localhost:3301/</strong> (or your machine's IP address if
              remote).
            </AlertDescription>
          </Alert>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              <strong>Troubleshooting:</strong> If you encounter issues, ensure ports 3301, 4317, and 4318 are open and
              Docker has sufficient resources (4GB+ memory recommended).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

function CreateNodeAppStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={2}
        title="Create a Sample Node.js Application"
        description="Set up a simple Express.js application for testing"
        icon={<Code2 className="h-6 w-6" />}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Option 1: Clone Sample App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock
            language="bash"
            code={`git clone https://github.com/SigNoz/sample-nodejs-app.git
cd sample-nodejs-app
npm install
node index.js`}
          />

          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Verify it's running by visiting <strong>http://localhost:5555/</strong> in your browser. You should see a
              "Hello, World!" message.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Option 2: Create Your Own App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Initialize project:</h4>
            <CodeBlock
              language="bash"
              code={`mkdir my-nodejs-app
cd my-nodejs-app
npm init -y
npm install express cors`}
            />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Create index.js:</h4>
            <CodeBlock
              language="javascript"
              code={`const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ]);
});

app.listen(5555, () => {
  console.log('Server running on http://localhost:5555');
});`}
            />
          </div>

          <div>
            <h4 className="font-semibold mb-2">Run the application:</h4>
            <CodeBlock language="bash" code="node index.js" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function OpenTelemetryStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={3}
        title="Instrument with OpenTelemetry"
        description="Add observability to your Node.js application"
        icon={<Zap className="h-6 w-6" />}
      />

      <Alert className="border-purple-200 bg-purple-50">
        <Zap className="h-4 w-4 text-purple-600" />
        <AlertDescription className="text-purple-800">
          OpenTelemetry collects telemetry data from your application and sends it to SigNoz. We'll use
          auto-instrumentation for simplicity, which requires minimal code changes.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Install OpenTelemetry Packages</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock
            language="bash"
            code="npm install --save @opentelemetry/api @opentelemetry/auto-instrumentations-node"
          />

          <div className="mt-4 space-y-2">
            <p className="font-medium">This installs:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
              <li>
                <code>@opentelemetry/api</code>: Core APIs for manual instrumentation
              </li>
              <li>
                <code>@opentelemetry/auto-instrumentations-node</code>: Automatic instrumentation for common Node.js
                libraries
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Set Environment Variables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Configure OpenTelemetry to send data to your self-hosted SigNoz instance:
          </p>

          <CodeBlock
            language="bash"
            code={`export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_TRACES_ENDPOINT="http://localhost:4318/v1/traces"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my-nodejs-app"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"`}
          />

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Environment Variables Explained:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Badge variant="outline" className="min-w-fit">
                  OTEL_TRACES_EXPORTER
                </Badge>
                <span className="text-muted-foreground">Specifies the exporter protocol (OTLP for SigNoz)</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="min-w-fit">
                  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT
                </Badge>
                <span className="text-muted-foreground">The SigNoz endpoint where traces are sent</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="min-w-fit">
                  OTEL_SERVICE_NAME
                </Badge>
                <span className="text-muted-foreground">Names your application in SigNoz dashboards</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="min-w-fit">
                  NODE_OPTIONS
                </Badge>
                <span className="text-muted-foreground">Enables auto-instrumentation for Node.js</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Run with OpenTelemetry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash" code="node index.js" />

          <Alert className="border-green-200 bg-green-50 mt-4">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              OpenTelemetry will now collect telemetry data and send it to SigNoz automatically!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

function ConfigureCollectorStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={4}
        title="Configure OpenTelemetry Collector"
        description="Verify and customize the collector configuration"
        icon={<Settings className="h-6 w-6" />}
      />

      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          The self-hosted SigNoz installation includes an OpenTelemetry Collector by default. Let's verify its
          configuration to ensure it's set up correctly.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Locate Configuration File</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">The OpenTelemetry Collector configuration is located at:</p>
          <CodeBlock language="bash" code="signoz/deploy/docker/otel-collector-config.yaml" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verify Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            The default configuration should include OTLP receiver and exporter:
          </p>

          <CodeBlock
            language="yaml"
            code={`receivers:
  otlp:
    protocols:
      grpc:
        endpoint: 0.0.0.0:4317
      http:
        endpoint: 0.0.0.0:4318

processors:
  batch:

exporters:
  otlp:
    endpoint: "signoz-otel-collector:4317"
    tls:
      insecure: true

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp]`}
          />

          <Alert className="border-amber-200 bg-amber-50">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              If you make changes to the configuration, restart the SigNoz containers:
              <code className="block mt-2 p-2 bg-amber-100 rounded">docker compose up -d --remove-orphans</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

function VerifyDataStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={5}
        title="Verify Data in SigNoz"
        description="Generate load and explore your telemetry data"
        icon={<BarChart3 className="h-6 w-6" />}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Generate Load
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Make several requests to create traces and metrics:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Using curl:</h4>
              <CodeBlock
                language="bash"
                code={`# Make multiple requests
for i in {1..20}; do
  curl http://localhost:5555/
  curl http://localhost:5555/api/users
  sleep 1
done`}
              />
            </div>

            <div>
              <h4 className="font-semibold mb-2">Or manually:</h4>
              <p className="text-sm text-muted-foreground">
                Refresh <code>http://localhost:5555</code> and <code>http://localhost:5555/api/users</code>
                multiple times in your browser.
              </p>
            </div>
          </div>

          <Alert className="border-blue-200 bg-blue-50">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              It may take 2-3 minutes for data to appear in SigNoz due to processing and network latency.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Access SigNoz Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="font-medium mb-2">Dashboard URL:</p>
            <div className="flex items-center gap-2">
              <code className="px-2 py-1 bg-white rounded text-sm">http://localhost:3301</code>
              <Button size="sm" variant="outline" className="h-7 bg-transparent">
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Explore Your Data:</h4>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <Server className="h-4 w-4 text-blue-600" />
                  Services Tab
                </h5>
                <p className="text-sm text-muted-foreground">
                  Lists your application (e.g., "my-nodejs-app"). Click it to view details.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                  Metrics Tab
                </h5>
                <p className="text-sm text-muted-foreground">
                  View request rate, error rate, and latency metrics (p99, p95, p50).
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-purple-600" />
                  Traces Tab
                </h5>
                <p className="text-sm text-muted-foreground">
                  Detailed request traces with flamegraphs to visualize request flow.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-orange-600" />
                  Logs Tab
                </h5>
                <p className="text-sm text-muted-foreground">Correlated logs for debugging (if configured).</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function BestPracticesStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={6}
        title="Best Practices for Observability"
        description="Optimize your observability setup for production"
        icon={<Target className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Correlate Signals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use SigNoz's ability to correlate logs, metrics, and traces for a complete picture of issues.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Set Up Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Configure alerts for anomalies like high error rates or latency spikes in the SigNoz dashboard.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              Custom Dashboards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Build custom dashboards to visualize key metrics like API latency and error rates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-purple-600" />
              Monitor Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Add host metrics (CPU, memory) using OpenTelemetry's hostmetrics receiver.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Addressing Downtime
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Since your organization has faced downtime, focus on these key areas:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <BarChart3 className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-red-800">Latency Monitoring</h5>
                <p className="text-sm text-red-700">Track p99 latency and identify slow endpoints</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-orange-800">Error Tracking</h5>
                <p className="text-sm text-orange-700">Monitor error rates to catch issues early</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-800">Trace Analysis</h5>
                <p className="text-sm text-blue-700">Use flamegraphs for root cause analysis</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ConclusionStep() {
  return (
    <div className="space-y-6">
      <StepCard
        step={7}
        title="Conclusion"
        description="You've successfully set up observability!"
        icon={<CheckCircle2 className="h-6 w-6" />}
      />

      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle2 className="h-5 w-5" />
            Congratulations!
          </CardTitle>
        </CardHeader>
        <CardContent className="text-green-800">
          <p>
            You've successfully set up observability for your Node.js application using OpenTelemetry and self-hosted
            SigNoz.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What You've Achieved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
              <Zap className="h-5 w-5 text-green-600" />
              <span className="font-medium">Detailed trace analysis</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Scalable foundation</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50 to-red-50">
              <CheckCircle2 className="h-5 w-5 text-orange-600" />
              <span className="font-medium">Reduced downtime risk</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">
                1
              </div>
              <div>
                <h5 className="font-medium">Regular Monitoring</h5>
                <p className="text-sm text-muted-foreground">Check your SigNoz dashboard regularly and set up alerts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                2
              </div>
              <div>
                <h5 className="font-medium">Expand Instrumentation</h5>
                <p className="text-sm text-muted-foreground">
                  Add custom metrics and traces for business-specific insights
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">
                3
              </div>
              <div>
                <h5 className="font-medium">Scale Your Setup</h5>
                <p className="text-sm text-muted-foreground">
                  Optimize SigNoz for production workloads and multiple services
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Further Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">SigNoz Documentation</div>
                  <div className="text-xs text-muted-foreground">Advanced features and configuration</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">OpenTelemetry Docs</div>
                  <div className="text-xs text-muted-foreground">Language-specific instrumentation</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">SigNoz Blog</div>
                  <div className="text-xs text-muted-foreground">Tips on analyzing telemetry data</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium">Community Slack</div>
                  <div className="text-xs text-muted-foreground">Get help and share experiences</div>
                </div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
