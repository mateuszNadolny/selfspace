'use client'

import { motion } from 'framer-motion'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import { BreathingSelectionProps } from '@/lib/types'
const BreathingSelection = ({
    setBreathingType,
    isSession,
    setIsSession,
}: BreathingSelectionProps) => {
    return (
        <div style={isSession ? { opacity: 0 } : { opacity: 1 }}>
            <div className="flex justify-center w-full relative animate-slide-down">
                <Tabs
                    defaultValue="box"
                    className="w-5/6 lg:w-[480px] font-sans"
                >
                    <TabsList className="flex justify-center items-center mb-5">
                        <TabsTrigger
                            value="box"
                            onClick={() => setBreathingType('box')}
                            className="w-full flex justify-center lg:text-xl text-sm break-normal"
                        >
                            Box breathing
                        </TabsTrigger>
                        <TabsTrigger
                            value="calm"
                            onClick={() => setBreathingType('calm')}
                            className="w-full flex justify-center flex-wrap lg:text-xl text-sm break-normal"
                        >
                            4-7-8 breathing
                        </TabsTrigger>
                        <TabsTrigger
                            value="awake"
                            onClick={() => setBreathingType('awake')}
                            className="w-full flex justify-center lg:text-xl text-sm break-normal"
                        >
                            Awake breathing
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="box">
                        <Card className="h-[200px] overflow-scroll lg:h-auto lg:overflow-hidden no-scrollbar">
                            <CardHeader>
                                <CardTitle>Box breathing</CardTitle>
                                <CardDescription className="w-auto text-md">
                                    {`Box breathing, also known as square breathing, is a simple and effective technique for managing stress and improving concentration. The process involves inhaling, holding the breath, exhaling, and holding the breath again, each for a count of four seconds, creating a ‘box’ pattern. This method helps to calm the nervous system, reduce stress, and enhance focus by bringing attention to the breath and slowing down breathing patterns.`}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                    <TabsContent value="calm">
                        <Card className="h-[200px] overflow-scroll lg:h-auto lg:overflow-hidden no-scrollbar">
                            <CardHeader>
                                <CardTitle>4-7-8 breathing</CardTitle>
                                <CardDescription className="w-auto text-md">
                                    {`The 4-7-8 breathing technique is a relaxation method developed by Dr. Andrew Weil, designed to calm the mind and relax the body. The process involves inhaling quietly through the nose for a count of four seconds, holding the breath for a count of seven seconds, and then exhaling completely through the mouth for a count of eight seconds, completing one breath cycle. This breathing pattern helps to reduce anxiety, improve sleep, and bring about a state of tranquility, as it focuses the mind and regulates the flow of breath.`}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                    <TabsContent value="awake">
                        <Card className="h-[200px] overflow-scroll lg:h-auto lg:overflow-hidden no-scrollbar">
                            <CardHeader>
                                <CardTitle>Awake breathing</CardTitle>
                                <CardDescription className="w-auto text-md">
                                    {`Awake breathing is a great exercise to boost your alertness. It is a perfect replacement for coffee or an afternoon nap. Use this technique whenever you are feeling tired and in need of a quick burst of energy and alertness. The process involves inhaling quickly through the nose for a count of six seconds, and then exhaling for a count of two seconds. This breathing pattern can help you overcome energy slump and tiredness`}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="font-alegreya relative flex justify-center pt-[1rem] lg:pt-[2rem] animate-slide-down"
            >
                <Button
                    disabled={isSession}
                    className="text-xl bg-slate-50 text-black hover:text-slate-50 p-7"
                    onClick={() => {
                        if (setIsSession) {
                            setIsSession(true)
                        }
                    }}
                >
                    Start breathing
                </Button>
            </motion.div>
        </div>
    )
}

export default BreathingSelection
