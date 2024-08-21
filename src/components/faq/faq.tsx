import { useRef, useState, FC } from 'react';

interface Faq {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: Faq;
  idx: number;
}

const FaqsCard: FC<FaqsCardProps> = ({ faqsList, idx }) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement).offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-300 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-400">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: FC = () => {
  const faqsList: Faq[] = [
    {
      q: 'What services does Digital Edge offer?',
      a: 'Digital Edge provides a range of services including strategic marketing campaigns, comprehensive analytics, creative content creation, SEO optimization, social media management, and robust security solutions.',
    },
    {
      q: 'How can Digital Edge help improve my online presence?',
      a: 'Our team uses proven SEO techniques, engaging social media strategies, and cutting-edge website solutions to boost your visibility, attract more visitors, and convert them into loyal customers.',
    },
    {
      q: 'Why is data-driven marketing important?',
      a: 'Data-driven marketing allows us to make informed decisions, optimize campaigns in real-time, and achieve better results by understanding and targeting your audience effectively.',
    },
    {
      q: 'How does Digital Edge ensure the security of my digital assets?',
      a: 'We implement advanced security measures including data encryption, secure access controls, and regular vulnerability assessments to protect your digital assets and maintain a secure online presence.',
    },
    {
      q: 'Can Digital Edge create custom content for my brand?',
      a: 'Yes, our team of skilled writers and designers can produce compelling, tailor-made content that captures your brand\'s voice and engages your target audience across all platforms.',
    },
  ];

  return (
    <section id='faq' className="leading-relaxed max-w-screen-xl mt-12 mb-12 mx-auto px-4 md:px-8 pb-20">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
