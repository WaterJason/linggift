interface Step {
  number: number
  title: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step.number < currentStep
                  ? "bg-[#c9a96e] text-white"
                  : step.number === currentStep
                    ? "bg-[#c9a96e] text-white ring-4 ring-[#c9a96e]/20"
                    : "bg-white text-[#8a7a6a] border-2 border-[#e5e0d8]"
              }`}
            >
              {step.number < currentStep ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`mt-2 text-xs font-medium hidden sm:block ${
                step.number <= currentStep ? "text-[#c9a96e]" : "text-[#8a7a6a]"
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 ${step.number < currentStep ? "bg-[#c9a96e]" : "bg-[#e5e0d8]"}`} />
          )}
        </div>
      ))}
    </div>
  )
}
