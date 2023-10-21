'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { BreathingSelectionProps } from '@/lib/types'
const BreathingSelection = ({
    isBoxBreathing,
    setIsBoxBreathing,
}: BreathingSelectionProps) => {
    return (
        <div>
            <div className="flex justify-center w-full relative">
                <Tabs
                    defaultValue="box"
                    className="w-5/6 lg:w-[480px] w- font-sans"
                >
                    <TabsList className="flex justify-center items-center mb-5">
                        <TabsTrigger
                            value="box"
                            onClick={() => setIsBoxBreathing(true)}
                            className="w-full flex justify-center text-xl"
                        >
                            Box breathing
                        </TabsTrigger>
                        <TabsTrigger
                            value="calm"
                            onClick={() => setIsBoxBreathing(false)}
                            className="w-full flex justify-center text-xl"
                        >
                            4-7-8 calm breathing
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="box">
                        <Card>
                            <CardHeader>
                                <CardTitle>Box breathing</CardTitle>
                                <CardDescription className="w-auto text-md">
                                    {`Box breathing, also known as square breathing, is a simple and effective technique for managing stress and improving concentration. The process involves inhaling, holding the breath, exhaling, and holding the breath again, each for a count of four, creating a ‘box’ pattern. This method helps to calm the nervous system, reduce stress, and enhance focus by bringing attention to the breath and slowing down breathing patterns.`}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                    <TabsContent value="calm">
                        <Card>
                            <CardHeader>
                                <CardTitle>4-7-8 breathing</CardTitle>
                                <CardDescription className="w-auto text-md">
                                    {`The 4-7-8 breathing technique is a relaxation method developed by Dr. Andrew Weil, designed to calm the mind and relax the body. The process involves inhaling quietly through the nose for a count of four, holding the breath for a count of seven, and then exhaling completely through the mouth for a count of eight, completing one breath cycle. This breathing pattern helps to reduce anxiety, improve sleep, and bring about a state of tranquility, as it focuses the mind and regulates the flow of breath.`}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default BreathingSelection
