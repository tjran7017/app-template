import { Main } from '~/comp';

function Page() {
  return (
    <Main>
      <div className="flex center w50 column h80 sticky">
        <Main.Title />
        <Main.Nav />
      </div>
      <div className="flex w50 column">
        <Main.Skill />
        <Main.Work />
        <Main.Project />
      </div>
    </Main>
  );
}

export default Page;
