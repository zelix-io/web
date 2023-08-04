import Alliance from '@/components/main/Alliance';
import Career from '@/components/main/Career';
import Exchanges from '@/components/main/Exchanges';
import Intro from '@/components/main/Intro';
import Investment from '@/components/main/Investment';
import Metaverse from '@/components/main/Metaverse';
import Milestone from '@/components/main/Milestone';
import Patners from '@/components/main/Patners';
import Team from '@/components/main/Team';
import Whatis from '@/components/main/Whatis';

export default function Home() {
  return (
    <>
      <Intro />
      <Whatis />
      <Metaverse />
      <Milestone />
      <Team />
      <Patners />
      {/* <Alliance /> */}
      <Investment />
      {/* <Exchanges /> */}
      <Career />
    </>
  );
}
