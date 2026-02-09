import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardTitle
} from "@/components/ui/card"

export default function ExperienceSection() {
  return (
    <section id='experience'>
      <div className="wrapper mt-20">
        <h2 className="text-base! text-primary">Experience</h2>
        <Card className="p-6 mt-10">
          <CardTitle>Information Technology Supervisor</CardTitle>
          <CardDescription>2021 - PRESENT</CardDescription>
          <CardContent>Managed user accounts, permissions, and system access. Ensured data accuracy, backups, and high system uptime. Implemented process improvements and technology upgrades.</CardContent>
        </Card>
        <Card className="p-6 mt-10">
          <CardTitle>Quik Technology</CardTitle>
          <CardDescription>2024 - PRESENT</CardDescription>
          <CardContent>
            Designed, built, and currently operate a production POS and inventory management platform actively used by real businesses. Worked end-to-end across frontend, backend, and data layers, shipping incremental improvements and maintaining system reliability.
            Key Platform Capabilities:
            <ul>
              <li>Sales, purchasing, and inventory tracking</li>
              <li>Real-time low-stock and near-expiry alerts</li>
              <li>Role-based permissions and approval workflows</li>
              <li>Secure authentication and authorization</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}