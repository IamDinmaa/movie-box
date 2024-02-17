export type userDetail = {
  id: number | string;
  photoURL: string;
};

export type activeIconType = {
  "btn-home": boolean;
  "btn-film": boolean;
  "btn-television": boolean;
  "btn-bookmark": boolean;
};
export type scaffoldType = {
  children: React.JSX.Element;
  removeSearch?: boolean;
  activeIcon?: activeIconType;
};
