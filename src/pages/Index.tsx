import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MigrationDashboard } from "@/components/MigrationDashboard";

const Index = () => {
  const [activeTab, setActiveTab] = useState("migration");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <MigrationDashboard />
        </div>
      </main>
    </div>
  );
};

export default Index;
