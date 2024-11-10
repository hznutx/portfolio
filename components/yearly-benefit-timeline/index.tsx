import {useRouter} from 'next/router';
import {BsArrowRight, BsCircle} from 'react-icons/bs';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {useMediaQuery} from 'react-responsive';
import {ETypeTimeline} from './type.enum';

interface ITimelineDetail {
  id?: number;
  year?: number;
  header?: string;
  description?: string;
}
interface IYearlyBenefitTimelineProps {
  courseCount?: string;
  footerText?: string;
  headerTimeline?: string;
  headerTimelineColor?: string;
  id?: number;
  sectionID?: string;
  titleText?: string;
  userReplanCount?: string;
  Timeline: ITimelineDetail[];
}

const YearlyBenefitTimeline: React.FC<IYearlyBenefitTimelineProps> = (strapiData) => {
  const router = useRouter();
  const isTabletScreen = useMediaQuery({minWidth: 768});
  const isTimelineChanged = useMediaQuery({minWidth: 1170});
  const isSingleColumn = useMediaQuery({minWidth: 937});
  const currentYear = new Date().getFullYear();
  const handleRedirect = () => {
    router.push({pathname: '/course'});
  };

  const getFormattedTypeTimeline = (text: string, type: ETypeTimeline) => {
    const highlightText = 'คอร์สใหม่'; // Text to detect
    const regex = new RegExp(`(${highlightText})`, 'g'); // Regex to find the highlight text

    switch (type) {
      case ETypeTimeline.header:
        return text
          .split(/(\d+)/)
          .filter(Boolean)
          .map((part, index) => {
            const isNumber = /^\d+$/.test(part);
            return (
              <span
                key={index}
                className={isNumber ? 'text-red-500 text-lg lg:text-[42px] xl:text-[56px]' : ''}>
                {part}
              </span>
            );
          });

      case ETypeTimeline.description:
        return text.split(regex).map((part, index) => {
          const isHighlight = part === highlightText;
          return (
            <span
              key={index}
              className={'text-purple-500'}>
              {part}
            </span>
          );
        });

      default:
        return text;
    }
  };

  return (
    <div className='flex flex-col justify-center items-center px-[32px] w-full text-center  bg-slate-100 bg-cover py-10'>
      <p className='text-center text-[32px] font-semibold mb-20'>
        ส่วนหนึ่งของ<span className='text-red-500 font-bold'>ตัวเลข</span>ที่น่าภูมิใจของผู้เรียนสมาชิกรายปี
      </p>
      <div
        id='box'
        className='flex flex-wrap gap-8 pb-10 mb-20 lg:mb-24 3xl:mb-[130px]'>
        <div className='space-y-4 w-full text-center md:w-fit md:text-left bg-gradient-to-b from-grayFS-100 to-grayFS-50 p-10 rounded-[20px]'>
          <p className='text-[72px] font-bold text-red-500'>{strapiData?.courseCount}</p>
          <p className='text-2xl lg:text-[28px] font-medium'>คอร์สเรียน</p>
          <p className='text-sm break-word whitespace-pre-wrap'>
            จำนวนคอร์สที่สมาชิกรายปี <br /> เรียนได้มากที่สุด
          </p>
        </div>
        <div className='space-y-4 w-full text-center md:w-fit md:text-left bg-gradient-to-b from-grayFS-100 to-grayFS-50 p-10 rounded-[20px]'>
          <p className='text-[72px] font-bold text-pinkFS-500'>{strapiData?.userReplanCount}</p>
          <p className='text-2xl lg:text-[28px] font-medium'>สมาชิกรายปีที่ต่ออายุ</p>
          <p className='whitespace-pre-wrap text-sm break-word'>จำนวนคนที่ต่ออายุทั้งหมด</p>
        </div>
      </div>
      <h1 className='text-center text-2xl lg:text-[32px] max-w-xs xl:max-w-[420px] whitespace-break-spaces font-medium leading-12'>{strapiData?.titleText}</h1>
      <p
        className='text-[40px] md:text-[64px] mt-12 mb-6 font-Sarabun font-bold'
        style={{color: strapiData?.headerTimelineColor}}>
        {strapiData?.headerTimeline}
      </p>
      <span
        onClick={handleRedirect}
        className='text-red-500 inline-flex gap-2 items-center cursor-pointer hover:text-red-700'>
        ดูคอร์สทั้งหมด
        <BsArrowRight />
      </span>
      {/* Timeline */}
      <div className={`lg:w-[75%] py-10 flex flex-col justify-center items-center`}>
        <VerticalTimeline
          lineColor={'#595959'}
          layout={'2-columns'}>
          {strapiData?.Timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work !py-0`}
              contentStyle={{background: 'transparent', boxShadow: 'none', paddingTop: 0}}
              contentArrowStyle={{borderRight: '7px solid transparent'}}
              date={String(new Date().getFullYear())}
              dateClassName={`!w-fit text-base font-medium ${index === 1 ? 'text-red-500 font-bold' : index === 0 ? 'text-grayFS-800' : 'text-red-500'}`}
              iconStyle={{color: '#fff', marginTop: '20px'}}
              icon={index === 1 && <BsCircle className='text-red-500' />}
              iconClassName={`!shadow-none border !border-[#595959] !w-[16px] !h-[16px]  ${isTimelineChanged ? '!ml-[-10px]' : '!ml-[10px]'} 
              ${currentYear > 0 ? 'bg-[#8c8c8c]' : currentYear === item.year ? 'bg-white border !border-gray-500' : 'bg-white border !border-red-500'}`}>
              <div
                className={`
                ${index === 0 ? '!text-left xl:!text-right' : 'text-left'}
                font-bold font-Sarabun`}>
                <h1 className='text-sm lg:text-[36px] xl:text-[42px] lg:!leading-14'>{item?.header && getFormattedTypeTimeline(item.header, ETypeTimeline.header)}</h1>
              </div>
              <h4
                id='timeline-description'
                className={`pt-2 lg:pt-4 text-[8px] lg:text-lg xl:text-xl !leading-6 font-medium font-Sarabun ${index === 0 ? '!text-left xl:!text-right' : 'text-left'}`}>
                hi{' '}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className='relative'>
        <div className='z-[5] relative'>
          <p className='text-2xl md:text-[32px] leading-12 font-medium max-w-72 md:max-w-[600px] md:whitespace-break-spaces'>{strapiData?.footerText}</p>
        </div>
        <div
          className='w-[290px] h-[290px] absolute z-0 mt-[-30%]  ml-[-15%] 
          md:block hidden bg-gray-300 bg-cover bg-center'
        />
      </div>
    </div>
  );
};

export default YearlyBenefitTimeline;
