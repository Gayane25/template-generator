import { TemplateDropdown } from 'components/TemplateDropdown';
import { TemplateTypeSelector } from 'components/TemplateTypeSelector';
import { useAppContext } from 'context/context';

const App = () => {
  const { selectedLayout } = useAppContext();

  return (
    <div>
      <TemplateDropdown />
      <TemplateTypeSelector selectedLayout={selectedLayout} />
    </div>
  );
};

export default App;
