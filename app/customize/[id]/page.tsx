import { CustomizationFlow } from "@/components/customization/customization-flow"

interface CustomizePageProps {
  params: Promise<{ id: string }>
}

export default async function CustomizePage({ params }: CustomizePageProps) {
  const { id } = await params
  return <CustomizationFlow jewelryId={id} />
}
