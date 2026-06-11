import React from 'react'
import { STATS_DATA } from '../../utils/helper'
import Card from '../common/Card'

const Stats = () => {
  return (
    <section className="px-4 bg-white">
      <div className="max-w-285 mx-auto md:py-19.5 py-5 ">
        <div>
          <h1 className="text-center font-semibold text-[40px] text-black leading-[100%]">
            Lorem ipsum
          </h1>
        </div>
        <div className="card grid md:grid-cols-3 min-[540px]:grid-cols-2  justify-center gap-6 mt-10 ">
          {STATS_DATA.map((item, index) => (

            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats