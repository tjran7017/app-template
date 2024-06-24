import { Main } from '~/comp';

function Page() {
  return (
    <Main>
      <div className="main-left">
        <Main.Title />
        <Main.Nav />
      </div>
      <div className="main-right">
        <Main.Skill />
        <Main.Work />
        <Main.Project />
      </div>
    </Main>
  );
}

export default Page;
