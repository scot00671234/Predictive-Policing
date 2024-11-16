import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const CrimeAnalysisDashboard = () => {
  // Historical data
  const [timeData] = useState([
    { hour: "00:00", incidents: 45, predicted: 48, upperBound: 55, lowerBound: 41 },
    { hour: "04:00", incidents: 20, predicted: 22, upperBound: 28, lowerBound: 16 },
    { hour: "08:00", incidents: 65, predicted: 62, upperBound: 70, lowerBound: 54 },
    { hour: "12:00", incidents: 90, predicted: 88, upperBound: 95, lowerBound: 81 },
    { hour: "16:00", incidents: 85, predicted: 82, upperBound: 90, lowerBound: 74 },
    { hour: "20:00", incidents: 70, predicted: 73, upperBound: 80, lowerBound: 66 }
  ]);

  // Forecast data for next 24 hours
  const [forecastData] = useState([
    { hour: "00:00", predicted: 47, upperBound: 55, lowerBound: 39, risk: "medium" },
    { hour: "04:00", predicted: 25, upperBound: 32, lowerBound: 18, risk: "low" },
    { hour: "08:00", predicted: 68, upperBound: 78, lowerBound: 58, risk: "high" },
    { hour: "12:00", predicted: 92, upperBound: 102, lowerBound: 82, risk: "high" },
    { hour: "16:00", predicted: 83, upperBound: 93, lowerBound: 73, risk: "high" },
    { hour: "20:00", predicted: 71, upperBound: 81, lowerBound: 61, risk: "medium" }
  ]);

  const [locationData] = useState([
    { location: "Downtown", incidents: 250, predicted: 265 },
    { location: "Suburb A", incidents: 150, predicted: 145 },
    { location: "Suburb B", incidents: 180, predicted: 190 },
    { location: "Industrial", incidents: 120, predicted: 115 }
  ]);

  const [riskFactors] = useState([
    { factor: "Time of Day", importance: 0.85 },
    { factor: "Location", importance: 0.75 },
    { factor: "Temperature", importance: 0.45 },
    { factor: "Population Density", importance: 0.65 }
  ]);

  // Model performance metrics
  const [modelMetrics] = useState({
    accuracy: 89.5,
    precision: 86.2,
    recall: 84.8,
    mape: 8.3
  });

  // Anomaly alerts
  const [anomalyAlerts] = useState([
    {
      location: "Downtown",
      prediction: "Unusual spike expected between 14:00-16:00",
      confidence: 85
    },
    {
      location: "Suburb A",
      prediction: "Below average activity predicted for evening hours",
      confidence: 78
    }
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Predictive Crime Analysis Dashboard</h1>
          <p className="text-gray-600">AI-Powered Pattern Analysis and Forecasting</p>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Next 24 Hours</SelectItem>
              <SelectItem value="week">Next Week</SelectItem>
              <SelectItem value="month">Next Month</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              <SelectItem value="downtown">Downtown</SelectItem>
              <SelectItem value="suburbA">Suburb A</SelectItem>
              <SelectItem value="suburbB">Suburb B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="predictions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="temporal">Temporal Analysis</TabsTrigger>
          <TabsTrigger value="spatial">Spatial Analysis</TabsTrigger>
          <TabsTrigger value="factors">Risk Factors</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>24-Hour Forecast</CardTitle>
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <CardDescription>Predicted incidents with confidence intervals</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={forecastData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="upperBound" stroke="transparent" fill="#2563eb" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="lowerBound" stroke="transparent" fill="#2563eb" fillOpacity={0.1} />
                    <Line type="monotone" dataKey="predicted" stroke="#2563eb" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Model Performance Metrics</CardTitle>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Accuracy</p>
                    <p className="text-2xl font-bold text-blue-600">{modelMetrics.accuracy}%</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Precision</p>
                    <p className="text-2xl font-bold text-blue-600">{modelMetrics.precision}%</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">Recall</p>
                    <p className="text-2xl font-bold text-blue-600">{modelMetrics.recall}%</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">MAPE</p>
                    <p className="text-2xl font-bold text-blue-600">{modelMetrics.mape}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Anomaly Alerts</CardTitle>
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {anomalyAlerts.map((alert, index) => (
                    <Alert key={index}>
                      <AlertTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        {alert.location}
                      </AlertTitle>
                      <AlertDescription>
                        {alert.prediction}
                        <div className="mt-1 text-sm text-gray-500">
                          Confidence: {alert.confidence}%
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Historical vs Predicted Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="incidents" stroke="#2563eb" name="Actual" />
                    <Line type="monotone" dataKey="predicted" stroke="#10b981" name="Predicted" strokeDasharray="3 3" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={locationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="location" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="incidents" fill="#2563eb" name="Actual" />
                    <Bar dataKey="predicted" fill="#10b981" name="Predicted" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Risk Factor Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskFactors} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 1]} />
                    <YAxis type="category" dataKey="factor" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="importance" fill="#2563eb" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="temporal">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Temporal Pattern Analysis</CardTitle>
              <Calendar className="h-6 w-6 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={timeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="incidents" stroke="#2563eb" />
                    <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeDasharray="3 3" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spatial">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Geographic visualization would be rendered here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="factors">
          <Card>
            <CardHeader>
              <CardTitle>Risk Factor Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={riskFactors} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 1]} />
                  <YAxis type="category" dataKey="factor" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="importance" fill="#2563eb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CrimeAnalysisDashboard;
