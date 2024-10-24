import SelectorButton from '../selector-button/selector-button';

export default function Character() {
  return (
    <div>
      <h2 className="inline-block border-t border-r border-fill-300 py-1 pl-1 pr-3 text-sm text-primary-600 dark:text-primary-500 lg:py-2 lg:pl-2 lg:pr-5 lg:text-base rounded-tr-xl">
        CharacterName
      </h2>
      <SelectorButton view="character">+</SelectorButton>
    </div>
  );
}
