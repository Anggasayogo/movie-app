import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './card.css'

const SkeletonCard = () => {
    return (
        <section id="skeleton">
            <ul className="list">
              <li className="card">
                <Skeleton height={180} />
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            </ul>
      </section>
    )
}

export default SkeletonCard
