import React from 'react'
import {Card, Heading} from '@luminate/components'
import {useGetFarmQuery} from '../../graphql'
import {Link, RouteComponentProps} from 'react-router-dom'

interface Params {
  id: string
}

interface Props extends RouteComponentProps<Params> {}

const FarmDetailView = ({match}: Props) => {
  const {
    params: {id},
  } = match
  const {data, error, loading} = useGetFarmQuery({variables: {id}})

  if (error) {
    return <div>Error!</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data || !data.getFarm) {
    return null
  }

  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Heading>{data.getFarm?.name}</Heading>
        </div>
        <div className="text-sm">
          <Link className="link" to={`${match.url}/edit`}>
            Edit Info
          </Link>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col  w-2/3 mr-4">
          <Card>
            <img src="https://picsum.photos/800/400" />
            <div className="p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Information Section</p>
              <p>This is some information about the farm</p>
            </div>
          </Card>
        </div>
        <div className="flex flex-col w-1/3">
          <Card>
            <div className="mb-3">
              <p className="text-xs text-gray-500 uppercase tracking-wide">Country</p>
              {data.getFarm.country ? (
                <Link className="link" to={`/countries/${data.getFarm.country?.id}`}>
                  {data.getFarm.country?.name}
                </Link>
              ) : (
                '-'
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Region</p>
              {data.getFarm.region ? (
                <Link className="link" to={`/regions/${data.getFarm.region?.id}`}>
                  {' '}
                  {data.getFarm.region?.name}
                </Link>
              ) : (
                '-'
              )}
            </div>
          </Card>
        </div>
      </div>
      <div>
        <Heading as="h3">Story</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu lacus, condimentum quis nulla eget, aliquet
          iaculis mi. Nulla tincidunt velit vitae enim porttitor, ac dignissim lectus porta. Vivamus eu urna malesuada,
          sollicitudin nibh ac, condimentum ante. Aenean pharetra nisl et mi dictum fringilla. Phasellus a lorem arcu.
          Donec consequat rutrum enim, bibendum commodo mauris auctor in. Phasellus blandit rhoncus pretium. Suspendisse
          sed varius sem, eget tempor ligula. Nam nisi tellus, sollicitudin maximus dui a, viverra feugiat arcu. Nullam
          dui lacus, placerat ac ultrices quis, tincidunt eget purus. Aenean semper et tortor at pellentesque.
          Vestibulum ut diam turpis. Morbi vel est lectus. Praesent pretium mattis nibh, at scelerisque augue volutpat
          eu. Morbi tempor feugiat justo id dapibus. Sed condimentum, lacus eleifend tincidunt ultricies, lacus tellus
          feugiat arcu, vel consequat erat felis at nulla. Integer urna mi, vehicula eget ipsum ac, posuere feugiat
          magna. Pellentesque pharetra in augue sed auctor. Sed luctus sodales aliquam. Fusce scelerisque porttitor dui
          in egestas. Sed pretium risus et turpis tempor, sit amet euismod ligula commodo. Donec justo turpis, hendrerit
          at venenatis eu, iaculis id ligula. Sed bibendum vestibulum urna sit amet bibendum. Nullam placerat bibendum
          metus. Ut feugiat risus a mauris consectetur, in auctor nulla accumsan. Morbi efficitur, sem eu ultricies
          mattis, lacus sapien pulvinar ligula, vitae ultricies risus lacus ut nisl. Nullam faucibus imperdiet ligula,
          in viverra mauris ultrices ut. Vivamus ut placerat est, sed ultrices ex. Nunc felis nulla, laoreet eget mauris
          in, faucibus vestibulum eros. Sed sed libero orci. Donec porta massa ut luctus tincidunt. In bibendum faucibus
          sem, quis auctor erat euismod id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. In hac habitasse platea dictumst. Nulla vehicula metus nec volutpat sollicitudin. Ut
          egestas metus sem, sed rutrum urna aliquet porta. Donec efficitur vel quam vel euismod. Mauris quis purus
          tincidunt, tincidunt magna a, fermentum nisl. Cras pretium neque tellus. Donec mi augue, congue et sapien vel,
          luctus lacinia elit. Proin ut est venenatis, laoreet mauris et, hendrerit ligula. Ut consequat iaculis ligula
          vitae vestibulum. Pellentesque fermentum vel libero eu mattis. Sed scelerisque dui sit amet lacus sollicitudin
          suscipit. Praesent sodales tristique vulputate. Pellentesque tellus odio, fermentum et ligula at, egestas
          vestibulum magna. Phasellus rutrum suscipit odio, nec cursus libero pharetra in. Maecenas egestas, neque sed
          viverra lacinia, magna nunc varius libero, id euismod neque ligula et neque. Suspendisse aliquet vestibulum
          dolor, at convallis justo molestie in. Mauris bibendum metus id massa malesuada imperdiet. Aenean sagittis
          magna consequat, vehicula orci at, ullamcorper urna. Suspendisse elementum a purus ut consectetur. Duis vitae
          est feugiat, facilisis mi vel, pellentesque ipsum. Sed vel tortor tristique, pellentesque lorem varius, dictum
          nunc. Integer ac sem et urna interdum venenatis. In faucibus lobortis sodales. Donec id ligula est. Duis eget
          massa orci. Praesent facilisis nibh ligula, vitae dignissim metus auctor sit amet. Pellentesque sed dui
          fringilla erat pulvinar dignissim. Aenean dapibus, libero ac commodo varius, nisi nisi vulputate ante, in
          ultrices quam turpis at arcu.
        </p>
      </div>
    </div>
  )
}

export default FarmDetailView
