import React from 'react'
import Card from '../../components/data-display/card'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-5 gap-10 h-full'>
            <div className="col-span-3 flex items-center justify-between pl-5 pr-1 py-5">
                <Card
                    className='bg-orange-400 shadow-lg shadow-orange-400/50 border-none text-white'
                    bodyStyle={{
                        fontSize: 18
                    }}
                >
                    Content of card 1
                </Card>

                <Card
                    className='bg-indigo-400 shadow-lg shadow-indigo-400/50 border-none text-white'
                    bodyStyle={{
                        fontSize: 18
                    }}
                >
                    Content of card 2
                </Card>

                <Card
                    className='bg-cyan-400 shadow-lg shadow-cyan-400/50 border-none text-white'
                    bodyStyle={{
                        fontSize: 18
                    }}
                >
                    Content of card 2
                </Card>
            </div>

            <div className="col-span-2 border-l">
                <div className="px-10">
                    123
                </div>
            </div>
        </div>
    )
}

export default Dashboard