import React from 'react'
import ServiceDetails from '../../components/Service/ServiceDetails'
import { useParams } from 'react-router-dom';

const ParticularService = () => {
    const { providerId } = useParams();
  return (
    <div>
      <h1>hello</h1>
      <ServiceDetails providerId={providerId} />
    </div>
  )
}

export default ParticularService
