export default function RecentWork() {
  const clients = ["G", "Slack", "Steam", "Zoom", "Adobe"];
  return (
    <section className="py-10 px-6">
      <h2 className="text-xl mb-4">Recent work</h2>
      <div className="flex justify-between items-center">
        {clients.map((client, index) => (
          <div key={index} className="text-gray-400">
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
