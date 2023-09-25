import clsx from 'clsx';
import React from 'react';

type Props = {
    className?: string
}

const AIicon = ({ className }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path className={clsx(className, "fill-skin-base")} d="M6.78029 0.00142057C6.60807 -0.0031473 6.42732 0.00276549 6.24362 0.0269976C5.87622 0.075462 5.49566 0.197888 5.14301 0.456515C4.4377 0.97377 4.03623 1.95009 4.03623 3.4208C4.03497 3.51056 4.05151 3.59968 4.0849 3.68297C4.11828 3.76626 4.16785 3.84207 4.23072 3.90599C4.29359 3.96991 4.3685 4.02067 4.45111 4.05532C4.53371 4.08996 4.62237 4.1078 4.71191 4.1078C4.80145 4.1078 4.89011 4.08996 4.97271 4.05532C5.05532 4.02067 5.13023 3.96991 5.1931 3.90599C5.25597 3.84207 5.30554 3.76626 5.33892 3.68297C5.37231 3.59968 5.38885 3.51056 5.38759 3.4208C5.38759 2.18212 5.67973 1.74086 5.94097 1.54927C6.20205 1.35781 6.62512 1.32821 7.11109 1.38434C7.41992 1.42022 7.75597 1.56894 7.9812 1.768C8.20644 1.96706 8.31553 2.18131 8.31553 2.41272V4.98541H6.97209C6.86728 4.84533 6.7314 4.7316 6.5752 4.65323C6.41899 4.57485 6.24674 4.53398 6.07206 4.53385C5.7734 4.53385 5.48696 4.65279 5.27577 4.8645C5.06458 5.07621 4.94593 5.36336 4.94593 5.66276C4.94593 5.96217 5.06458 6.24932 5.27577 6.46103C5.48696 6.67274 5.7734 6.79168 6.07206 6.79168C6.24674 6.79154 6.41899 6.75067 6.5752 6.6723C6.7314 6.59393 6.86728 6.4802 6.97209 6.34011H8.31553V12.8993V13.1136H6.97209C6.86728 12.9735 6.7314 12.8598 6.5752 12.7814C6.41899 12.7031 6.24674 12.6622 6.07206 12.6621C5.7734 12.6621 5.48696 12.781 5.27577 12.9927C5.06458 13.2044 4.94593 13.4916 4.94593 13.791C4.94593 14.0904 5.06458 14.3775 5.27577 14.5892C5.48696 14.8009 5.7734 14.9199 6.07206 14.9199C6.24674 14.9197 6.41899 14.8789 6.5752 14.8005C6.7314 14.7221 6.86728 14.6084 6.97209 14.4683H8.31553V16.7632C8.31553 17.0863 8.21744 17.2535 8.04015 17.3982C7.86286 17.5429 7.56952 17.6485 7.19555 17.6452C6.60637 17.6398 6.11846 17.5644 5.85564 17.3894C5.59281 17.2144 5.38759 16.947 5.38759 16.0647C5.38885 15.9749 5.37231 15.8858 5.33892 15.8025C5.30554 15.7192 5.25597 15.6434 5.1931 15.5795C5.13023 15.5156 5.05532 15.4648 4.97271 15.4302C4.89011 15.3955 4.80145 15.3777 4.71191 15.3777C4.62237 15.3777 4.53371 15.3955 4.45111 15.4302C4.3685 15.4648 4.29359 15.5156 4.23072 15.5795C4.16785 15.6434 4.11828 15.7192 4.0849 15.8025C4.05151 15.8858 4.03497 15.9749 4.03623 16.0647C4.03623 17.2198 4.44429 18.0757 5.10781 18.5174C5.77134 18.9592 6.52287 18.9939 7.18324 18.9999C7.81242 19.0055 8.41984 18.8344 8.89267 18.4486C9.3225 18.0979 9.60748 17.5551 9.65632 16.9466C9.67556 16.882 9.68505 16.8148 9.68448 16.7473V13.5652H12.8288C13.4431 13.5652 13.955 13.052 13.955 12.4363V11.5314C14.1433 11.389 14.2823 11.1909 14.3523 10.9651C14.4224 10.7392 14.4199 10.4971 14.3452 10.2727C14.2705 10.0484 14.1275 9.85322 13.9362 9.71477C13.745 9.57632 13.5152 9.50157 13.2793 9.50108C13.0432 9.50133 12.8131 9.57598 12.6216 9.71447C12.4301 9.85297 12.2869 10.0483 12.2122 10.2729C12.1375 10.4974 12.1351 10.7398 12.2053 10.9658C12.2756 11.1918 12.4149 11.39 12.6036 11.5323V12.2105H9.68448V5.67511C9.6848 5.66306 9.6848 5.651 9.68448 5.63895V2.41272C9.68448 2.18131 9.79356 1.96706 10.0188 1.768C10.2438 1.5691 10.5794 1.42038 10.888 1.38434C11.3744 1.32806 11.7978 1.35768 12.059 1.54927C12.3203 1.74086 12.6124 2.18212 12.6124 3.4208C12.6125 3.55746 12.6538 3.6909 12.7309 3.8036C12.808 3.9163 12.9173 4.003 13.0444 4.05229L13.5221 4.23751C13.7845 4.33923 13.955 4.58759 13.955 4.86899V6.34011H12.828C12.7232 6.20003 12.5873 6.0863 12.4311 6.00793C12.2749 5.92955 12.1026 5.88868 11.9279 5.88855C11.6293 5.88855 11.3428 6.00749 11.1316 6.2192C10.9205 6.43091 10.8018 6.71806 10.8018 7.01747C10.8018 7.31687 10.9205 7.60402 11.1316 7.81573C11.3428 8.02744 11.6293 8.14638 11.9279 8.14638C12.1026 8.14625 12.2749 8.10538 12.4311 8.027C12.5873 7.94863 12.7232 7.8349 12.828 7.69482H14.1802C14.7944 7.69482 15.3063 7.18165 15.3063 6.5659V4.86899C15.3063 4.03142 14.7885 3.27651 14.0095 2.97453C14.0095 2.97424 14.0095 2.97394 14.0095 2.97365L13.8863 2.92602C13.7943 1.76751 13.4675 0.90422 12.857 0.456515C12.5043 0.197888 12.1238 0.075462 11.7564 0.0269976C11.389 -0.0214666 11.0344 0.0036107 10.7332 0.0384632C10.1402 0.107351 9.57515 0.354067 9.12493 0.751974C9.08009 0.791604 9.04245 0.84104 9 0.884269C8.95755 0.84104 8.91991 0.791604 8.87507 0.751974C8.42485 0.354067 7.8598 0.107351 7.26682 0.0384632C7.11622 0.0210369 6.95252 0.00598844 6.78029 0.00142057ZM2.12533 4.09816C1.97311 4.10332 1.82708 4.15988 1.71095 4.25867C0.850095 4.97118 0.0507594 6.03587 0.00240071 7.4461C-0.0259327 8.27639 0.191197 9.60522 0.938496 10.7958C0.789559 11.2177 0.657843 11.694 0.657843 12.259C0.657843 13.7725 1.22152 14.8631 1.93794 15.5426C2.0024 15.6037 2.07826 15.6516 2.16117 15.6833C2.24408 15.7151 2.33242 15.7302 2.42115 15.7278C2.50988 15.7253 2.59726 15.7054 2.6783 15.6691C2.75933 15.6327 2.83244 15.5808 2.89345 15.5162C2.95446 15.4515 3.00217 15.3755 3.03386 15.2924C3.06555 15.2092 3.08059 15.1207 3.07813 15.0317C3.07568 14.9428 3.05577 14.8552 3.01954 14.774C2.98331 14.6927 2.93148 14.6194 2.86699 14.5583C2.39602 14.1116 2.0092 13.4549 2.0092 12.259C2.0092 12.086 2.03138 11.9208 2.06199 11.7589H3.36935C3.98359 11.7589 4.49548 11.2458 4.49548 10.63V9.95265H5.17204C5.27685 10.0927 5.41272 10.2065 5.56893 10.2848C5.72513 10.3632 5.89739 10.4041 6.07206 10.4042C6.37073 10.4042 6.65717 10.2853 6.86836 10.0736C7.07955 9.86185 7.19819 9.57471 7.19819 9.2753C7.19819 8.97589 7.07955 8.68875 6.86836 8.47703C6.65717 8.26532 6.37073 8.14638 6.07206 8.14638C5.89739 8.14652 5.72513 8.18739 5.56893 8.26576C5.41272 8.34413 5.27685 8.45786 5.17204 8.59795H4.27026C3.65602 8.59795 3.14413 9.11111 3.14413 9.72687V10.4042H2.26874C2.25353 10.3748 2.23618 10.3465 2.21683 10.3195C1.55233 9.41541 1.33334 8.06451 1.35288 7.49196C1.3847 6.56398 1.8926 5.86562 2.57138 5.3038C2.68219 5.2148 2.76221 5.09307 2.80009 4.95589C2.83797 4.81871 2.83178 4.67305 2.78241 4.5396C2.73303 4.40614 2.64298 4.29167 2.52503 4.21243C2.40708 4.13319 2.26723 4.09321 2.12533 4.09816ZM17.1759 5.96351C17.0701 5.96479 16.9661 5.99094 16.8723 6.03985C16.7785 6.08876 16.6974 6.15907 16.6356 6.24512C16.5738 6.33118 16.533 6.43057 16.5165 6.5353C16.5 6.64003 16.5083 6.74718 16.5407 6.84813C16.6021 7.04956 16.6393 7.26161 16.6471 7.49196C16.6667 8.06451 16.4477 9.41541 15.7832 10.3195C15.7144 10.413 15.6708 10.5226 15.6565 10.6378C15.6421 10.753 15.6576 10.87 15.7014 10.9775C15.8652 11.3796 15.9908 11.7969 15.9908 12.259C15.9908 13.8536 15.3254 14.524 14.6342 14.9331C13.943 15.3422 13.2494 15.3882 13.2494 15.3882C13.0771 15.3981 12.9152 15.4737 12.7968 15.5995C12.6783 15.7253 12.6124 15.8917 12.6124 16.0647C12.6124 16.8175 12.4412 17.1277 12.2508 17.3056C12.0605 17.4835 11.7464 17.5865 11.298 17.6249C11.2079 17.6302 11.1198 17.6535 11.0388 17.6935C10.9578 17.7335 10.8857 17.7894 10.8266 17.8578C10.7675 17.9262 10.7227 18.0058 10.6948 18.0919C10.6669 18.178 10.6566 18.2688 10.6643 18.3589C10.672 18.4491 10.6976 18.5368 10.7397 18.6169C10.7817 18.6969 10.8394 18.7677 10.9092 18.8251C10.979 18.8824 11.0596 18.9252 11.1462 18.9508C11.2327 18.9764 11.3236 18.9844 11.4133 18.9743C12.0032 18.9237 12.6557 18.7786 13.172 18.2961C13.5716 17.9225 13.7773 17.3368 13.8723 16.6538C14.2555 16.5762 14.7603 16.432 15.3213 16.1C16.3193 15.5093 17.3422 14.2769 17.3422 12.259C17.3422 11.694 17.2105 11.2178 17.0615 10.7958C17.8088 9.60522 18.0259 8.27639 17.9976 7.4461C17.9856 7.09484 17.9275 6.76187 17.8331 6.45212C17.7919 6.30984 17.7053 6.18502 17.5866 6.09677C17.4679 6.00852 17.3236 5.96171 17.1759 5.96351Z" />
        </svg>
    );
};

export default AIicon;