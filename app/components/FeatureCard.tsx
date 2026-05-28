// components/FeatureCard.tsx

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>
    </div>
  );
}