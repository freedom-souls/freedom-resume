import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="姓名"
          labelClassName="col-span-full"
          name="name"
          placeholder="请输入姓名"
          value={name}
          onChange={handleProfileChange}
        />
        <Input
          label="求职意向"
          labelClassName="col-span-full"
          name="summary"
          placeholder="请输入求职意向、职位"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="邮箱"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@qq.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="电话"
          labelClassName="col-span-2"
          name="phone"
          placeholder="1xxxxxxxxxx"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/khanacademy"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="期望工作地"
          labelClassName="col-span-2"
          name="location"
          placeholder="北京、上海..."
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
