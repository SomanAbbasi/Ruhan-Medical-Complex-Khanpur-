interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  urdu: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto pt-8">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl group-hover:from-teal-100 group-hover:to-blue-100 transition-all duration-300">
                <div className="text-teal-600">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800 text-sm">{feature.title}</p>
                <p className="text-xs text-gray-500 mt-1 font-urdu" dir="rtl">
                  {feature.urdu}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}