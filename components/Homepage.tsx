import { Banner } from 'common/Banner'
import { FooterSlim } from 'common/FooterSlim'
import { useAllStakePools } from 'hooks/useAllStakePools'
import Head from 'next/head'

import { CollectionsView } from './CollectionsView'
import { MainHero } from './MainHero'

function Homepage() {
  console.time('stake pools')
  const allStakePools = useAllStakePools()
  console.timeEnd('stake pools')

  return (
    <div className="bg-dark-5">
      <Head>
        <title>OpenCardinal - NFT Staking</title>
        <meta name="title" content="NFT Staking on Solana" />
        <meta
          name="description"
          content="Launch staking for your NFT collection on Solana with reward distribution"
        />
        {/* <meta name="image" content="https://stake.barkprotocol.net/preview.png" />
        <meta name="og:image" content="https://stake.barkprotocol.net/preview.png" /> */}
        <link rel="icon" href={'/favicon.ico'} />
        {/* <script
          defer
          data-domain="stake.barkprotocol.net"
          src="https://plausible.io/js/plausible.js"
        ></script> */}
      </Head>
      <Banner />
      <MainHero />
      <div className="mx-auto flex flex-col gap-16 px-8 md:px-16">
        <CollectionsView
          configs={allStakePools.data?.stakePoolsWithMetadata.filter(
            (pool) =>
              !(
                pool.stakePoolMetadata?.hidden ||
                pool.stakePoolMetadata?.notFound
              )
          )}
        />
        <CollectionsView
          configs={allStakePools.data?.stakePoolsWithoutMetadata}
        />
      </div>
      <FooterSlim />
    </div>
  )
}

export default Homepage
