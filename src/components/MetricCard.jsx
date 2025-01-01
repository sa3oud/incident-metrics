import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'; // Ensure the path is correct

const MetricCard = ({ title, content, ...props }) => (
  <Card {...props}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      {content}
    </CardContent>
  </Card>
);

export default MetricCard;
