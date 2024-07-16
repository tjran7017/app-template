import { useContext, useEffect } from 'react';
import { ResumeContext, Navs } from '../SimpleResume.model';
import type { Nav } from '../SimpleResume.model';
import { SimpleResumeSection } from '../view';
import { SimpleResumeHeaderNavList } from './view';

export function SimpleResumeNavigation() {
  const { value, setValue } = useContext(ResumeContext);

  useEffect(() => {
    const lis = document.querySelectorAll('li');
    const targetIndex = Navs.indexOf(value);

    lis.forEach((li, index) => {
      index === targetIndex ? li.classList.add('show') : li.classList.remove('show');
    });
  }, [value]);

  const handleClickNav = (value: Nav) => setValue(value);

  return (
    <SimpleResumeSection className="fade" style={{ flexGrow: '1' }}>
      <SimpleResumeHeaderNavList navs={Navs} onClick={handleClickNav} />
    </SimpleResumeSection>
  );
}
