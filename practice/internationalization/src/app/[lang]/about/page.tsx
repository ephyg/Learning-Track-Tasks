import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
    const t = useTranslations('About');
  return <div>
    <h1>{t('message')}</h1>
  </div>;
};

export default Page;
