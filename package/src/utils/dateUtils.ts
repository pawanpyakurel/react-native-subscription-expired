type DateUtilsT = {
  activationDate: Date;
};

export const isSubscribedFulfilled = ({ activationDate }: DateUtilsT) => {
  const date = new Date();
  const today = date.setHours(0, 0, 0, 0);
  const vaidTill = activationDate?.setHours(0, 0, 0, 0);

  return today > vaidTill;
};
