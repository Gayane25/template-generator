import React from 'react';

import { COLORS } from 'styles/colors';

const SliderGrid = ({
  fill = COLORS.unchecked,
  stroke = COLORS.strokeUnchecked }): React.ReactElement => {
  return (
    <svg width="330" height="324" viewBox="0 0 330 324" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="329" height="323" rx="3.5" fill="white" />
      <rect x="0.5" y="0.5" width="329" height="323" rx="3.5" stroke={stroke} />
      <rect x="11.5" y="60" width="28" height="28" rx="4" fill="#F8F8F8" />
      <path d="M32.5 79.4444V68.5556C32.5 67.7 31.8 67 30.9444 67H20.0556C19.2 67 18.5 67.7 18.5 68.5556V79.4444C18.5 80.3 19.2 81 20.0556 81H30.9444C31.8 81 32.5 80.3 32.5 79.4444ZM22.7778 75.1667L24.7222 77.5078L27.4444 74L30.9444 78.6667H20.0556L22.7778 75.1667Z" fill={fill} />
      <rect x="11.5" y="98" width="28" height="28" rx="4" fill="#F8F8F8" />
      <path d="M32.5 117.444V106.556C32.5 105.7 31.8 105 30.9444 105H20.0556C19.2 105 18.5 105.7 18.5 106.556V117.444C18.5 118.3 19.2 119 20.0556 119H30.9444C31.8 119 32.5 118.3 32.5 117.444ZM22.7778 113.167L24.7222 115.508L27.4444 112L30.9444 116.667H20.0556L22.7778 113.167Z" fill={fill} />
      <rect x="11.5" y="136" width="28" height="28" rx="4" fill="#F8F8F8" />
      <path d="M32.5 155.444V144.556C32.5 143.7 31.8 143 30.9444 143H20.0556C19.2 143 18.5 143.7 18.5 144.556V155.444C18.5 156.3 19.2 157 20.0556 157H30.9444C31.8 157 32.5 156.3 32.5 155.444ZM22.7778 151.167L24.7222 153.508L27.4444 150L30.9444 154.667H20.0556L22.7778 151.167Z" fill={fill} />
      <rect x="11.5" y="174" width="28" height="28" rx="4" fill="#F8F8F8" />
      <path d="M32.5 193.444V182.556C32.5 181.7 31.8 181 30.9444 181H20.0556C19.2 181 18.5 181.7 18.5 182.556V193.444C18.5 194.3 19.2 195 20.0556 195H30.9444C31.8 195 32.5 194.3 32.5 193.444ZM22.7778 189.167L24.7222 191.508L27.4444 188L30.9444 192.667H20.0556L22.7778 189.167Z" fill={fill} />
      <rect x="49.5" y="60" width="137" height="153" rx="4" fill="#F8F8F8" />
      <path d="M128.5 144.778V129.222C128.5 128 127.5 127 126.278 127H110.722C109.5 127 108.5 128 108.5 129.222V144.778C108.5 146 109.5 147 110.722 147H126.278C127.5 147 128.5 146 128.5 144.778ZM114.611 138.667L117.389 142.011L121.278 137L126.278 143.667H110.722L114.611 138.667Z" fill={fill} />
      <path d="M196.5 63C196.5 61.3431 197.843 60 199.5 60H254.5C256.157 60 257.5 61.3431 257.5 63V73C257.5 74.6569 256.157 76 254.5 76H199.5C197.843 76 196.5 74.6569 196.5 73V63Z" fill={fill} />
      <rect x="196.5" y="86" width="122" height="10" rx="3" fill={fill} />
      <rect x="196.5" y="100" width="122" height="10" rx="3" fill={fill} />
      <path d="M196.5 117C196.5 115.343 197.843 114 199.5 114H254.5C256.157 114 257.5 115.343 257.5 117V121C257.5 122.657 256.157 124 254.5 124H199.5C197.843 124 196.5 122.657 196.5 121V117Z" fill={fill} />
      <path d="M196.5 137C196.5 135.343 197.843 134 199.5 134H228.5C230.157 134 231.5 135.343 231.5 137V149C231.5 150.657 230.157 152 228.5 152H199.5C197.843 152 196.5 150.657 196.5 149V137Z" fill={fill} />
      <path d="M241.5 137C241.5 135.343 242.843 134 244.5 134H273.5C275.157 134 276.5 135.343 276.5 137V149C276.5 150.657 275.157 152 273.5 152H244.5C242.843 152 241.5 150.657 241.5 149V137Z" fill={fill} />
      <rect x="196.5" y="163" width="8" height="8" rx="4" fill={fill} />
      <rect x="208.5" y="162" width="110" height="10" rx="3" fill={fill} />
      <rect x="196.5" y="177" width="8" height="8" rx="4" fill={fill} />
      <rect x="208.5" y="176" width="110" height="10" rx="3" fill={fill} />
      <rect x="196.5" y="191" width="8" height="8" rx="4" fill={fill} />
      <rect x="208.5" y="190" width="110" height="10" rx="3" fill={fill} />
      <rect x="196.5" y="205" width="8" height="8" rx="4" fill={fill} />
      <rect x="208.5" y="204" width="110" height="10" rx="3" fill={fill} />
      <path d="M137.801 304.364C137.741 303.86 137.5 303.469 137.075 303.19C136.651 302.912 136.131 302.773 135.514 302.773C135.063 302.773 134.669 302.846 134.331 302.991C133.996 303.137 133.734 303.338 133.545 303.593C133.36 303.848 133.267 304.138 133.267 304.463C133.267 304.735 133.332 304.969 133.461 305.164C133.594 305.356 133.763 305.517 133.968 305.646C134.174 305.772 134.389 305.877 134.614 305.96C134.84 306.039 135.047 306.104 135.236 306.153L136.27 306.432C136.535 306.501 136.83 306.598 137.155 306.72C137.483 306.843 137.796 307.01 138.094 307.222C138.396 307.431 138.645 307.7 138.84 308.028C139.036 308.356 139.134 308.759 139.134 309.236C139.134 309.786 138.989 310.283 138.701 310.727C138.416 311.171 137.998 311.524 137.448 311.786C136.901 312.048 136.237 312.179 135.455 312.179C134.725 312.179 134.094 312.061 133.56 311.826C133.03 311.591 132.612 311.263 132.308 310.842C132.006 310.421 131.835 309.932 131.795 309.375H133.068C133.101 309.759 133.231 310.078 133.456 310.33C133.685 310.578 133.973 310.764 134.321 310.886C134.672 311.006 135.05 311.065 135.455 311.065C135.925 311.065 136.348 310.989 136.722 310.837C137.097 310.681 137.393 310.465 137.612 310.19C137.831 309.912 137.94 309.587 137.94 309.216C137.94 308.878 137.846 308.603 137.657 308.391C137.468 308.179 137.219 308.006 136.911 307.874C136.603 307.741 136.27 307.625 135.912 307.526L134.659 307.168C133.864 306.939 133.234 306.612 132.77 306.188C132.306 305.764 132.074 305.209 132.074 304.523C132.074 303.953 132.228 303.455 132.536 303.031C132.848 302.604 133.265 302.272 133.789 302.037C134.316 301.798 134.904 301.679 135.554 301.679C136.21 301.679 136.794 301.797 137.304 302.032C137.814 302.264 138.219 302.582 138.517 302.987C138.819 303.391 138.978 303.85 138.994 304.364H137.801ZM142.175 301.818V312H141.002V301.818H142.175ZM144.324 312V304.364H145.497V312H144.324ZM144.92 303.091C144.692 303.091 144.495 303.013 144.329 302.857C144.166 302.701 144.085 302.514 144.085 302.295C144.085 302.077 144.166 301.889 144.329 301.734C144.495 301.578 144.692 301.5 144.92 301.5C145.149 301.5 145.345 301.578 145.507 301.734C145.673 301.889 145.756 302.077 145.756 302.295C145.756 302.514 145.673 302.701 145.507 302.857C145.345 303.013 145.149 303.091 144.92 303.091ZM150.53 312.159C149.893 312.159 149.331 311.998 148.844 311.677C148.357 311.352 147.976 310.895 147.701 310.305C147.426 309.711 147.288 309.01 147.288 308.202C147.288 307.4 147.426 306.704 147.701 306.114C147.976 305.524 148.359 305.068 148.849 304.746C149.34 304.425 149.907 304.264 150.55 304.264C151.047 304.264 151.439 304.347 151.728 304.513C152.019 304.675 152.242 304.861 152.394 305.07C152.55 305.275 152.671 305.444 152.757 305.577H152.856V301.818H154.03V312H152.896V310.827H152.757C152.671 310.966 152.548 311.142 152.389 311.354C152.23 311.562 152.003 311.75 151.708 311.915C151.413 312.078 151.02 312.159 150.53 312.159ZM150.689 311.105C151.159 311.105 151.557 310.982 151.882 310.737C152.207 310.489 152.454 310.146 152.623 309.708C152.792 309.267 152.876 308.759 152.876 308.182C152.876 307.612 152.793 307.113 152.628 306.685C152.462 306.254 152.217 305.92 151.892 305.681C151.567 305.439 151.166 305.318 150.689 305.318C150.192 305.318 149.777 305.446 149.446 305.701C149.118 305.953 148.871 306.296 148.705 306.73C148.543 307.161 148.461 307.645 148.461 308.182C148.461 308.725 148.544 309.219 148.71 309.663C148.879 310.104 149.128 310.455 149.456 310.717C149.787 310.976 150.198 311.105 150.689 311.105ZM159.543 312.159C158.807 312.159 158.173 311.997 157.639 311.672C157.109 311.344 156.699 310.886 156.411 310.3C156.126 309.71 155.983 309.024 155.983 308.241C155.983 307.459 156.126 306.77 156.411 306.173C156.699 305.573 157.1 305.106 157.614 304.771C158.131 304.433 158.734 304.264 159.424 304.264C159.822 304.264 160.214 304.33 160.602 304.463C160.99 304.596 161.343 304.811 161.661 305.109C161.979 305.404 162.233 305.795 162.422 306.283C162.611 306.77 162.705 307.37 162.705 308.082V308.58H156.819V307.565H161.512C161.512 307.134 161.426 306.75 161.253 306.412C161.084 306.074 160.842 305.807 160.528 305.612C160.216 305.416 159.848 305.318 159.424 305.318C158.956 305.318 158.552 305.434 158.211 305.666C157.873 305.895 157.613 306.193 157.43 306.561C157.248 306.929 157.157 307.323 157.157 307.744V308.42C157.157 308.997 157.256 309.486 157.455 309.887C157.657 310.285 157.937 310.588 158.295 310.797C158.653 311.002 159.069 311.105 159.543 311.105C159.851 311.105 160.13 311.062 160.378 310.976C160.63 310.886 160.847 310.754 161.03 310.578C161.212 310.399 161.353 310.177 161.452 309.912L162.586 310.23C162.466 310.615 162.266 310.953 161.984 311.244C161.702 311.533 161.354 311.758 160.94 311.92C160.526 312.08 160.06 312.159 159.543 312.159ZM164.49 312V304.364H165.623V305.517H165.703C165.842 305.139 166.094 304.833 166.459 304.597C166.823 304.362 167.234 304.244 167.692 304.244C167.778 304.244 167.885 304.246 168.015 304.249C168.144 304.253 168.242 304.258 168.308 304.264V305.457C168.268 305.447 168.177 305.433 168.035 305.413C167.895 305.389 167.748 305.378 167.592 305.378C167.221 305.378 166.89 305.456 166.598 305.612C166.309 305.764 166.081 305.976 165.912 306.248C165.746 306.516 165.663 306.823 165.663 307.168V312H164.49ZM176.719 315.023C176.152 315.023 175.665 314.95 175.257 314.804C174.849 314.661 174.51 314.473 174.238 314.237C173.969 314.005 173.756 313.757 173.597 313.491L174.531 312.835C174.637 312.974 174.772 313.134 174.934 313.312C175.096 313.495 175.318 313.652 175.6 313.785C175.885 313.921 176.258 313.989 176.719 313.989C177.335 313.989 177.844 313.839 178.245 313.541C178.646 313.243 178.847 312.776 178.847 312.139V310.588H178.747C178.661 310.727 178.538 310.9 178.379 311.105C178.223 311.307 177.998 311.488 177.703 311.647C177.411 311.803 177.017 311.881 176.52 311.881C175.903 311.881 175.35 311.735 174.859 311.443C174.372 311.152 173.986 310.727 173.701 310.17C173.419 309.614 173.278 308.937 173.278 308.142C173.278 307.36 173.416 306.679 173.691 306.099C173.966 305.515 174.349 305.065 174.839 304.746C175.33 304.425 175.897 304.264 176.54 304.264C177.037 304.264 177.431 304.347 177.723 304.513C178.018 304.675 178.243 304.861 178.399 305.07C178.558 305.275 178.681 305.444 178.767 305.577H178.886V304.364H180.02V312.219C180.02 312.875 179.871 313.409 179.572 313.82C179.277 314.234 178.88 314.537 178.379 314.729C177.882 314.925 177.329 315.023 176.719 315.023ZM176.679 310.827C177.15 310.827 177.547 310.719 177.872 310.504C178.197 310.288 178.444 309.978 178.613 309.574C178.782 309.17 178.866 308.686 178.866 308.122C178.866 307.572 178.784 307.086 178.618 306.665C178.452 306.245 178.207 305.915 177.882 305.676C177.557 305.437 177.156 305.318 176.679 305.318C176.182 305.318 175.768 305.444 175.436 305.696C175.108 305.948 174.861 306.286 174.695 306.71C174.533 307.134 174.452 307.605 174.452 308.122C174.452 308.652 174.535 309.121 174.7 309.529C174.869 309.933 175.118 310.252 175.446 310.484C175.777 310.712 176.188 310.827 176.679 310.827ZM182.168 312V304.364H183.301V305.517H183.381C183.52 305.139 183.772 304.833 184.136 304.597C184.501 304.362 184.912 304.244 185.369 304.244C185.455 304.244 185.563 304.246 185.692 304.249C185.822 304.253 185.92 304.258 185.986 304.264V305.457C185.946 305.447 185.855 305.433 185.712 305.413C185.573 305.389 185.426 305.378 185.27 305.378C184.899 305.378 184.567 305.456 184.276 305.612C183.987 305.764 183.759 305.976 183.589 306.248C183.424 306.516 183.341 306.823 183.341 307.168V312H182.168ZM187.377 312V304.364H188.55V312H187.377ZM187.973 303.091C187.744 303.091 187.547 303.013 187.382 302.857C187.219 302.701 187.138 302.514 187.138 302.295C187.138 302.077 187.219 301.889 187.382 301.734C187.547 301.578 187.744 301.5 187.973 301.5C188.202 301.5 188.397 301.578 188.56 301.734C188.726 301.889 188.808 302.077 188.808 302.295C188.808 302.514 188.726 302.701 188.56 302.857C188.397 303.013 188.202 303.091 187.973 303.091ZM193.582 312.159C192.946 312.159 192.384 311.998 191.897 311.677C191.41 311.352 191.029 310.895 190.754 310.305C190.478 309.711 190.341 309.01 190.341 308.202C190.341 307.4 190.478 306.704 190.754 306.114C191.029 305.524 191.411 305.068 191.902 304.746C192.393 304.425 192.959 304.264 193.602 304.264C194.099 304.264 194.492 304.347 194.781 304.513C195.072 304.675 195.294 304.861 195.447 305.07C195.603 305.275 195.723 305.444 195.81 305.577H195.909V301.818H197.082V312H195.949V310.827H195.81C195.723 310.966 195.601 311.142 195.442 311.354C195.283 311.562 195.056 311.75 194.761 311.915C194.466 312.078 194.073 312.159 193.582 312.159ZM193.741 311.105C194.212 311.105 194.61 310.982 194.935 310.737C195.259 310.489 195.506 310.146 195.675 309.708C195.844 309.267 195.929 308.759 195.929 308.182C195.929 307.612 195.846 307.113 195.68 306.685C195.515 306.254 195.269 305.92 194.945 305.681C194.62 305.439 194.219 305.318 193.741 305.318C193.244 305.318 192.83 305.446 192.499 305.701C192.17 305.953 191.924 306.296 191.758 306.73C191.595 307.161 191.514 307.645 191.514 308.182C191.514 308.725 191.597 309.219 191.763 309.663C191.932 310.104 192.18 310.455 192.509 310.717C192.84 310.976 193.251 311.105 193.741 311.105Z" fill={fill} />
    </svg>
  );
};

export default SliderGrid;