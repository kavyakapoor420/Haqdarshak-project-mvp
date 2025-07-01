"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card"
import { Button } from  '../Components/ui/button'
import { Badge } from "../Components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../Components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Components/ui/select"
import {
  Users,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Globe,
  BarChart3,
  Activity,
  Clock,
  Star,
  Eye,
  ThumbsUp,
  MessageCircle,
  Languages,
  MapPin,
  Download,
  RefreshCw,
} from "lucide-react"

// Dummy data
const dashboardData = {
  overview: {
    totalAgents: 40247,
    activeToday: 1834,
    questionsToday: 156,
    answersToday: 289,
    pendingReview: 23,
    avgResponseTime: "2.4 hours",
    engagementRate: 78.5,
    knowledgeBaseGrowth: 12.3,
  },
  recentQuestions: [
    {
      id: "1",
      title: "PM-KISAN payment delay issue in Maharashtra",
      author: "Rajesh Kumar",
      location: "Maharashtra",
      language: "Hindi",
      status: "answered",
      votes: 15,
      answers: 3,
      views: 234,
      timeAgo: "2 hours ago",
      tags: ["pm-kisan", "payment", "maharashtra"],
    },
    {
      id: "2",
      title: "Aadhaar linking process for MGNREGA workers",
      author: "Priya Sharma",
      location: "Rajasthan",
      language: "Hindi",
      status: "pending",
      votes: 8,
      answers: 1,
      views: 156,
      timeAgo: "4 hours ago",
      tags: ["aadhaar", "mgnrega", "linking"],
    },
    {
      id: "3",
      title: "Widow pension scheme eligibility criteria",
      author: "Meera Devi",
      location: "Uttar Pradesh",
      language: "Hindi",
      status: "review",
      votes: 22,
      answers: 5,
      views: 445,
      timeAgo: "6 hours ago",
      tags: ["pension", "widow", "eligibility"],
    },
  ],
  topAgents: [
    {
      name: "Amit Singh",
      location: "Delhi",
      reputation: 2840,
      questionsAnswered: 156,
      helpfulVotes: 892,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sunita Patel",
      location: "Gujarat",
      reputation: 2156,
      questionsAnswered: 134,
      helpfulVotes: 756,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ravi Kumar",
      location: "Tamil Nadu",
      reputation: 1987,
      questionsAnswered: 98,
      helpfulVotes: 623,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ],
  languageDistribution: [
    { language: "Hindi", percentage: 65, count: 26161 },
    { language: "English", percentage: 20, count: 8049 },
    { language: "Tamil", percentage: 8, count: 3220 },
    { language: "Telugu", percentage: 4, count: 1610 },
    { language: "Gujarati", percentage: 3, count: 1207 },
  ],
  weeklyActivity: [
    { day: "Mon", questions: 45, answers: 89 },
    { day: "Tue", questions: 52, answers: 94 },
    { day: "Wed", questions: 38, answers: 76 },
    { day: "Thu", questions: 61, answers: 112 },
    { day: "Fri", questions: 48, answers: 87 },
    { day: "Sat", questions: 34, answers: 65 },
    { day: "Sun", questions: 29, answers: 58 },
  ],
}

export function AdminDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("today")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-gray-700 font-medium">Haqdarshak Knowledge Hub Analytics & Management</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Agents</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {dashboardData.overview.totalAgents.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-600 font-medium">+2.5% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-green-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Active Today</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {dashboardData.overview.activeToday.toLocaleString()}
                    </p>
                    <p className="text-sm text-green-600 font-medium">+8.2% from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Questions Today</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.overview.questionsToday}</p>
                    <p className="text-sm text-green-600 font-medium">+15.3% from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg bg-gradient-to-br from-white to-orange-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Pending Review</p>
                    <p className="text-3xl font-bold text-gray-900">{dashboardData.overview.pendingReview}</p>
                    <p className="text-sm text-orange-600 font-medium">Needs attention</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white border border-orange-200 rounded-xl p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Content Review
            </TabsTrigger>
            <TabsTrigger value="agents" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Agent Management
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>

          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Questions */}
              <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-orange-600" />
                    Recent Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dashboardData.recentQuestions.map((question) => (
                    <div
                      key={question.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-orange-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{question.title}</h4>
                        <Badge
                          variant={
                            question.status === "answered"
                              ? "default"
                              : question.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                          className={
                            question.status === "answered"
                              ? "bg-green-100 text-green-800"
                              : question.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {question.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {question.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Languages className="h-3 w-3" />
                          {question.language}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {question.timeAgo}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {question.votes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {question.answers}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {question.views}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Performing Agents */}
              <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-600" />
                    Top Performing Agents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dashboardData.topAgents.map((agent, index) => (
                    <div
                      key={agent.name}
                      className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-lg font-bold text-orange-600">#{index + 1}</div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{agent.name}</div>
                        <div className="text-sm text-gray-600">{agent.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-orange-600">{agent.reputation}</div>
                        <div className="text-xs text-gray-600">{agent.questionsAnswered} answers</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Weekly Activity Chart */}
            <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  Weekly Activity Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-4 p-4">
                  {dashboardData.weeklyActivity.map((day) => (
                    <div key={day.day} className="flex flex-col items-center gap-2 flex-1">
                      <div className="flex flex-col gap-1 items-center w-full">
                        <div
                          className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg w-full transition-all duration-300 hover:from-orange-600 hover:to-orange-500"
                          style={{ height: `${(day.questions / 70) * 100}px` }}
                          title={`Questions: ${day.questions}`}
                        />
                        <div
                          className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg w-full transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                          style={{ height: `${(day.answers / 120) * 100}px` }}
                          title={`Answers: ${day.answers}`}
                        />
                      </div>
                      <div className="text-sm font-medium text-gray-700">{day.day}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded"></div>
                    <span className="text-sm text-gray-600">Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded"></div>
                    <span className="text-sm text-gray-600">Answers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Review Tab */}
          <TabsContent value="content" className="space-y-6">
            <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-600" />
                  Content Pending Review ({dashboardData.overview.pendingReview})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentQuestions
                    .filter((q) => q.status === "review")
                    .map((question) => (
                      <div key={question.id} className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2">{question.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>By {question.author}</span>
                              <span>{question.location}</span>
                              <span>{question.timeAgo}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                              Reject
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-800">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Multilingual Tab */}
          <TabsContent value="multilingual" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-orange-600" />
                    Language Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.languageDistribution.map((lang) => (
                      <div key={lang.language} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">{lang.language}</span>
                          <span className="text-sm text-gray-600">
                            {lang.percentage}% ({lang.count.toLocaleString()})
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    Engagement Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {dashboardData.overview.engagementRate}%
                    </div>
                    <div className="text-sm text-gray-600">Overall Engagement Rate</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-900">{dashboardData.overview.avgResponseTime}</div>
                      <div className="text-sm text-gray-600">Avg Response Time</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-xl font-bold text-gray-900">
                        +{dashboardData.overview.knowledgeBaseGrowth}%
                      </div>
                      <div className="text-sm text-gray-600">KB Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
