import React from 'react';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by over 20,000 companies all over the world</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis
                blandit libero cursus mattis.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="83" height="30" viewBox="0 0 83 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.186 0c.2.093.326.285.486.437.26.225.452.523.705.755.312.298.512.675.771 1.013.452.682.851 1.41 1.057 2.205.213.542.246 1.132.233 1.714.013.53-.133 1.053-.372 1.53-.413.721-1.157 1.205-1.935 1.463-.971.232-2.042.272-2.98-.139-.338-.185-.724-.311-.997-.603-.631-.516-.997-1.357-.877-2.171.186-1.45 1.057-2.695 1.988-3.767.086.158.013.344.073.51.08.35.206.721.472.973.326-.298.672-.596.95-.94.254-.371.46-.782.546-1.219.02-.556.073-1.139-.14-1.668l.02-.093zM.005 6.614c1.556.014 3.118-.013 4.674.014 0 1.542.014 3.085-.006 4.628 1.104.02 2.207.006 3.318.006.013.12.02.239.02.358-.014 1.271.006 2.536-.014 3.807-1.11.013-2.214 0-3.324.006.02 2.285-.007 4.562.013 6.846.04.2.067.398.06.603-.02.185.093.338.133.51.086.397.306.755.558 1.066.373.37.851.629 1.363.741.466.073.931.113 1.404.08.026.08.04.159.04.245a319.227 319.227 0 000 3.568c0 .166-.034.331-.06.49-.672 0-1.344.047-2.015 0-.4-.086-.825-.046-1.21-.218-1.07-.252-2.095-.781-2.86-1.583C.977 26.702.372 25.18.126 23.67c-.067-.166-.027-.358-.054-.536-.093-.365-.053-.749-.066-1.12a5974.61 5974.61 0 010-15.4zm22.714 4.29c.279-.072.578-.02.857-.079.586-.073 1.164.02 1.743.04.405-.007.797.113 1.196.192 1.483.358 2.886 1.145 3.904 2.297.18.298.452.517.624.821.433.682.719 1.444.965 2.212.153.563.232 1.145.306 1.721.033 1.278.013 2.563.02 3.84-.007 2.55.006 5.099-.007 7.648-1.556-.02-3.105-.007-4.655-.014a.365.365 0 01-.06-.046c-.006-3.569 0-7.137 0-10.7.007-.436-.073-.86-.166-1.277a4.106 4.106 0 00-.671-1.172c-.173-.205-.412-.338-.605-.517-.3-.198-.652-.29-.991-.384-.18-.013-.36 0-.525-.06-.712-.046-1.437.014-2.102.286-.485.231-.937.549-1.256.993-.526.622-.698 1.47-.685 2.264 0 3.536.007 7.078 0 10.613-1.57.014-3.139-.006-4.708.014-.026-3.41 0-6.827-.013-10.236.007-.437-.007-.874.027-1.311.086-.219.026-.457.093-.67.12-.807.425-1.575.764-2.31.333-.642.732-1.258 1.25-1.768.406-.41.825-.84 1.337-1.125.99-.689 2.16-1.106 3.358-1.271zm55.72-.039c.579-.013 1.15-.126 1.73-.033.312.04.63.033.943.046.06.576.014 1.159.027 1.735v2.317c0 .146.02.298-.04.437-.153-.112-.359-.073-.532-.119-.705-.06-1.43-.026-2.094.238a3.333 3.333 0 00-1.869 1.596c-.113.14-.113.338-.24.47-.205.742-.219 1.516-.205 2.278-.007 3.257.02 6.508-.014 9.766-1.55-.02-3.105 0-4.66-.014-.014-.013-.034-.04-.047-.053V18.903c-.02-.444.08-.874.073-1.311.106-.212.08-.457.146-.675.332-1.676 1.217-3.258 2.56-4.337.26-.291.632-.43.938-.662.99-.603 2.14-.894 3.284-1.053zm-68.919.39c1.57.027 3.138-.006 4.708.014 0 6.058-.007 12.11 0 18.161 0 .06 0 .179-.093.159H9.533c-.04-1-.006-2.006-.02-3.006.007-5.105 0-10.216.007-15.327zm49.238 12.29c.399-.153.784-.352 1.19-.49.585-.226 1.157-.497 1.742-.722 1.21-.557 2.46-1.02 3.684-1.543.292-.16.625-.232.91-.404.326-.126.652-.238.971-.384.28-.166.599-.232.885-.377.379-.153.744-.325 1.13-.464.392-.218.831-.324 1.223-.536.107-.073.28-.053.346-.179-.113-.159-.053-.358-.113-.53-.086-.31-.173-.615-.246-.92-.299-.92-.731-1.8-1.316-2.569-.712-1.026-1.69-1.854-2.773-2.463-.712-.43-1.51-.675-2.307-.887-.492-.06-.965-.232-1.463-.225-.452-.06-.918-.086-1.363-.007-.792.013-1.55.205-2.3.424-1.31.457-2.554 1.152-3.558 2.112-.3.278-.546.603-.831.887-.446.57-.852 1.172-1.157 1.821-.433.973-.845 1.993-.891 3.072-.147.517-.1 1.06-.107 1.59-.013.337.04.668.107.992-.02.344.113.662.16.993.112.702.425 1.351.71 2 .785 1.602 2.022 2.993 3.571 3.9 1.018.622 2.148 1.066 3.332 1.231.964.152 1.954.179 2.925.053.333.027.652-.12.984-.139 1.417-.331 2.806-.927 3.877-1.927.319-.251.618-.55.87-.867.426-.43.732-.953 1.038-1.47.293-.55.532-1.132.705-1.735-.093-.04-.2-.026-.292-.026-1.556.007-3.106-.007-4.662 0-.146 0-.146.199-.239.278-.266.384-.605.708-.964 1.013-.519.37-1.13.57-1.736.748-.16.02-.312.013-.458.073-.373.027-.752.013-1.13.007-.42-.08-.839-.172-1.244-.305-.625-.318-1.237-.682-1.709-1.198-.12-.146-.312-.258-.352-.45.106-.047.206-.12.325-.14.193-.033.34-.185.526-.238zm-1.915-3.351c-.093-.232-.007-.503-.02-.748.106-.338.14-.695.266-1.033.319-.748.711-1.483 1.283-2.073.266-.218.492-.483.798-.648.226-.12.445-.252.678-.358.432-.126.851-.324 1.303-.324.413-.1.838-.047 1.257-.04 1.097.152 2.201.622 2.912 1.49.074.172-.172.185-.272.251-.432.239-.918.358-1.35.603-.193.033-.36.152-.545.212-1.377.596-2.78 1.119-4.143 1.741-.731.285-1.456.59-2.167.927zm-4.954-17.03c-1.456-.012-2.912 0-4.369-.006-.106.013-.232-.033-.319.047.014 3.111 0 6.23.007 9.342-.007.112.02.225-.027.33-.133-.02-.2-.145-.299-.218-.671-.576-1.423-1.066-2.26-1.35-.566-.219-1.158-.331-1.756-.437-.678-.014-1.363-.034-2.048.006-.073.02-.14.04-.213.047-1.522.211-2.945.92-4.116 1.893-.651.61-1.303 1.245-1.762 2.013-.538.761-.884 1.635-1.216 2.496-.153.543-.306 1.08-.373 1.635-.126.854-.073 1.728-.06 2.59.034.224.107.436.113.661a9.18 9.18 0 00.625 2.126c.246.655.645 1.251 1.011 1.847.26.33.512.675.824.966.466.457.925.954 1.51 1.272.691.523 1.51.834 2.307 1.139.293.052.565.218.864.225.253.02.486.139.739.125.133-.013.252.08.392.067.645.02 1.296.02 1.941 0 .107 0 .213-.047.326-.053.446.006.858-.166 1.29-.226.565-.205 1.17-.337 1.696-.642.778-.357 1.482-.86 2.114-1.43a8.187 8.187 0 001.922-2.49c.206-.416.439-.82.572-1.27.252-.623.365-1.285.452-1.94.146-.577.1-1.179.113-1.775V3.164zm-4.728 17.93c-.04.702-.305 1.37-.618 2-.525.986-1.41 1.741-2.414 2.218-.153.08-.352.073-.458.218-.187 0-.373.007-.552.073-.572.014-1.164.066-1.723-.092-.239-.113-.505-.16-.744-.285-.3-.166-.639-.278-.885-.53-.465-.324-.824-.768-1.15-1.225-.26-.443-.519-.9-.638-1.403-.133-.265-.12-.563-.193-.841-.02-.709-.06-1.437.106-2.126.074-.218.12-.45.2-.668.193-.351.312-.742.565-1.06.133-.278.366-.483.552-.721.499-.57 1.184-.934 1.875-1.219.26-.059.512-.191.785-.191.552-.14 1.123-.027 1.669.072.718.259 1.43.616 1.988 1.146.206.192.359.43.565.622a5.625 5.625 0 011.07 4.012zM78.4 27.265h1.743c.006.132.006.265 0 .397-.2.027-.4-.006-.592.02-.027.596 0 1.185-.013 1.781a4.773 4.773 0 00-.532-.006c-.02-.47-.014-.947-.007-1.417 0-.126.027-.272-.087-.358-.172-.026-.345.007-.518-.02a2.625 2.625 0 01.006-.397zm2.062.007c.246-.007.492-.02.738.013-.013.192.146.324.193.503.066.225.166.437.232.662.054.1.147.186.113.311.133-.516.34-1.006.546-1.49a8.47 8.47 0 01.711 0c.013.709 0 1.43 0 2.14a2.97 2.97 0 01-.485 0c.006-.497 0-.994.013-1.484-.06.053-.12.1-.166.166-.087.45-.32.86-.432 1.31-.133.02-.26.02-.393.007-.04-.251-.22-.457-.22-.715-.179-.218-.185-.53-.325-.774-.093.178-.02.39-.04.582-.026.311.033.63-.026.94-.16 0-.34.053-.466-.06.02-.701 0-1.403.007-2.111z" />
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="125" height="39" viewBox="0 0 125 39" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.879 9.8a2.533 2.533 0 01-2.539 2.537 2.532 2.532 0 01-2.538-2.538 2.508 2.508 0 012.538-2.537c1.446.039 2.539 1.171 2.539 2.537zm-10.466 5.114v.624s-1.21-1.562-3.787-1.562c-4.256 0-7.576 3.24-7.576 7.73 0 4.45 3.28 7.73 7.576 7.73 2.616 0 3.787-1.601 3.787-1.601v.663c0 .313.235.546.547.546h3.163V14.365H55.96a.561.561 0 00-.547.549zm0 9.407c-.585.86-1.757 1.601-3.162 1.601-2.5 0-4.413-1.561-4.413-4.216 0-2.655 1.914-4.216 4.413-4.216 1.367 0 2.616.78 3.162 1.6v5.231zm6.053-9.954h3.749v14.678h-3.749V14.367zm55.998-.391c-2.578 0-3.788 1.562-3.788 1.562V7.301h-3.749v21.744h3.163a.558.558 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728 0-4.45-3.319-7.731-7.536-7.731zm-.625 11.907c-1.445 0-2.577-.741-3.163-1.6V19.05c.586-.78 1.835-1.6 3.163-1.6 2.499 0 4.412 1.561 4.412 4.216 0 2.654-1.913 4.216-4.412 4.216zm-8.864-5.543v8.744h-3.75V20.77c0-2.42-.78-3.396-2.888-3.396-1.132 0-2.304.585-3.047 1.445v10.228h-3.748v-14.68h2.967c.313 0 .547.274.547.548v.624c1.094-1.132 2.538-1.562 3.983-1.562 1.64 0 3.007.47 4.1 1.406 1.328 1.093 1.836 2.498 1.836 4.958zm-22.533-6.364c-2.576 0-3.787 1.562-3.787 1.562V7.301h-3.749v21.744h3.163a.559.559 0 00.547-.546v-.664s1.21 1.6 3.787 1.6c4.257 0 7.576-3.277 7.576-7.728.04-4.451-3.28-7.731-7.537-7.731zm-.625 11.907c-1.444 0-2.576-.741-3.162-1.6V19.05c.586-.78 1.835-1.6 3.162-1.6 2.5 0 4.413 1.561 4.413 4.216 0 2.654-1.913 4.216-4.413 4.216zM74.665 13.976c1.132 0 1.718.196 1.718.196v3.474s-3.124-1.055-5.076 1.171v10.267h-3.75V14.367h3.164c.312 0 .546.273.546.546v.625c.704-.82 2.227-1.562 3.398-1.562zM35.733 27.718c-.195-.468-.39-.976-.586-1.406-.313-.702-.625-1.366-.898-1.99l-.039-.04a406.921 406.921 0 00-8.63-17.644l-.117-.235c-.32-.608-.633-1.22-.937-1.835-.39-.703-.78-1.444-1.406-2.147C21.87.859 20.074 0 18.161 0c-1.953 0-3.71.86-4.998 2.342-.586.703-1.016 1.444-1.406 2.148a84.724 84.724 0 01-.936 1.835l-.118.234c-3.007 5.856-5.935 11.79-8.63 17.645l-.04.078c-.272.625-.585 1.289-.898 1.99-.195.43-.39.899-.585 1.406-.508 1.444-.664 2.81-.468 4.217a8.297 8.297 0 005.076 6.48c1.016.43 2.07.625 3.163.625.313 0 .703-.039 1.016-.078 1.288-.156 2.616-.585 3.905-1.327 1.6-.898 3.124-2.186 4.842-4.06 1.718 1.874 3.28 3.162 4.842 4.06 1.29.742 2.616 1.17 3.905 1.327.312.04.703.078 1.016.078 1.093 0 2.186-.195 3.162-.625 2.734-1.094 4.647-3.591 5.077-6.48.31-1.366.154-2.732-.353-4.177zm-17.611 2.03c-2.11-2.655-3.476-5.153-3.944-7.26-.195-.899-.235-1.68-.117-2.382a3.78 3.78 0 01.625-1.64c.742-1.054 1.991-1.718 3.436-1.718 1.445 0 2.734.625 3.437 1.718.312.468.547 1.015.625 1.64.117.703.078 1.522-.117 2.381-.47 2.069-1.837 4.568-3.945 7.26zm15.58 1.835a5.802 5.802 0 01-3.553 4.568c-.937.39-1.953.507-2.968.39-.976-.118-1.953-.43-2.967-1.015-1.406-.782-2.812-1.991-4.452-3.787 2.577-3.162 4.139-6.051 4.725-8.627a9.765 9.765 0 00.195-3.32 6.329 6.329 0 00-1.054-2.654c-1.212-1.757-3.242-2.771-5.507-2.771-2.264 0-4.295 1.054-5.505 2.771a6.335 6.335 0 00-1.055 2.655 8.107 8.107 0 00.195 3.319c.586 2.576 2.187 5.504 4.725 8.666-1.601 1.796-3.046 3.006-4.452 3.787-1.015.586-1.991.898-2.967 1.015a6.25 6.25 0 01-2.968-.39 5.802 5.802 0 01-3.553-4.568 6.457 6.457 0 01.351-3.045c.117-.39.313-.78.508-1.25.273-.624.585-1.288.898-1.951l.04-.078a425.627 425.627 0 018.59-17.528l.117-.235c.313-.585.625-1.21.937-1.795.313-.625.664-1.211 1.094-1.719.82-.936 1.913-1.444 3.124-1.444 1.21 0 2.304.508 3.124 1.444.43.51.78 1.095 1.093 1.719.313.585.626 1.21.937 1.795l.118.235a516.841 516.841 0 018.552 17.567v.039c.312.626.586 1.328.898 1.953.195.468.39.858.508 1.248.311 1.014.428 1.991.272 3.006z" />
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <svg className="max-w-full fill-current text-gray-400" width="113" height="30" viewBox="0 0 113 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5h3.94v8.21h8.31V5h3.946v20.153H12.25V16.77H3.94v8.383H0V5zm28.678 13.589V9.912h3.736v8.677c0 3.62-3.14 6.564-7 6.564s-7-2.945-7-6.564V9.912h3.736v8.677c0 1.687 1.465 3.06 3.264 3.06 1.799 0 3.264-1.373 3.264-3.06zm14.167-8.575c4.185 0 7.784 3.28 7.784 7.57 0 4.344-3.903 7.569-8.357 7.569-4.006 0-7.573-3.168-7.573-7.794V5h3.75v6.669c1.249-1.15 2.542-1.655 4.396-1.655zm.093 11.886c2.152 0 4.096-1.99 4.096-4.317s-1.944-4.317-4.096-4.317c-2.54 0-4.483 1.99-4.483 4.317s1.943 4.317 4.483 4.317zm13.987-11c0 3.28 8.938.924 8.938 8.493 0 3.505-3.108 5.748-6.964 5.748-2.571 0-4.723-1.01-6.458-3l2.72-2.635c1.017 1.065 1.735 2.074 3.948 2.074 1.404 0 2.629-1.038 2.629-2.214 0-3.814-8.938-1.654-8.938-8.466 0-3.673 2.93-5.888 6.995-5.888 2.033 0 4.513 1.065 5.738 2.607l-2.45 2.691c-.956-.953-2.42-1.738-3.527-1.738-1.375 0-2.63.56-2.63 2.328zm18.808-1.084c4.453 0 8.357 3.224 8.357 7.57 0 4.289-3.6 7.569-7.785 7.569-1.854 0-3.147-.506-4.397-1.655V30H68.16V17.61c0-4.627 3.566-7.794 7.573-7.794zm.666 11.887c2.152 0 4.095-1.992 4.095-4.318 0-2.327-1.943-4.317-4.095-4.317-2.54 0-4.483 1.99-4.483 4.317 0 2.326 1.943 4.318 4.483 4.318zm35.285.197c.42 0 .898-.028 1.316-.055l-.927 3.196c-.359.083-1.017.112-1.496.112-3.197 0-5.527-1.599-5.527-4.767V7.995l3.795-1.598v4.066h3.437v3.083h-3.437v6.083c0 1.374.628 2.271 2.839 2.271zm-10.72-8.125c.702 1.097 1.036 2.295 1.036 3.593v.066c0 1.319-.415 2.518-1.17 3.604-.75 1.082-1.742 1.93-3.01 2.55a8.651 8.651 0 01-3.843.874h-.225c-1.228 0-2.35-.241-3.367-.637a8.644 8.644 0 01-1.439-.708l-3.238 2.913c.077.219.117.45.117.685a2.162 2.162 0 01-.743 1.615 2.674 2.674 0 01-1.797.67 2.672 2.672 0 01-1.796-.67c-.48-.431-.744-1.004-.744-1.615a2.16 2.16 0 01.743-1.615c.698-.631 1.741-.837 2.668-.527l3.133-2.824a6.582 6.582 0 01-1.223-1.91 6.758 6.758 0 01-.516-2.558v-.269c0-1.286.46-2.466 1.214-3.538a7.382 7.382 0 011.335-1.407L78.66 5.95l-.687-.469a3.53 3.53 0 01-1.686.431C74.47 5.912 73 4.588 73 2.956 73 1.323 74.47 0 76.285 0c1.816 0 3.286 1.323 3.286 2.956 0 .272-.06.53-.137.78 3.255 2.222 8.82 6.025 10.517 7.184a9.297 9.297 0 012.618-.738V6.669c-1.097-.42-1.738-1.346-1.738-2.428 0-1.474 1.337-2.668 2.976-2.668 1.637 0 2.952 1.194 2.952 2.668 0 1.082-.68 2.009-1.778 2.428v3.511a8.595 8.595 0 013.009.937c1.256.667 2.26 1.553 2.974 2.658zm-3.956 6.11c.765-.756 1.148-1.59 1.148-2.49 0-.136-.006-.277-.018-.415a3.896 3.896 0 00-.717-1.837 4.181 4.181 0 00-1.598-1.307c-.64-.295-1.318-.422-2.034-.422h-.074c-.79 0-1.5.193-2.163.587a4.23 4.23 0 00-1.562 1.537c-.352.586-.492 1.208-.492 1.863v.202c0 .666.246 1.295.698 1.87.438.587.974 1.05 1.678 1.375.624.295 1.262.457 1.915.457h.188c1.142 0 2.152-.541 3.031-1.42z" />
              </svg>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
              <svg className="max-w-full fill-current text-gray-400" width="109" height="33" viewBox="0 0 109 33" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.43 25.591c-6.293 4.653-15.447 7.132-23.342 7.132-11.06 0-20.976-4.08-28.527-10.87-.572-.533-.077-1.258.648-.839 8.124 4.73 18.154 7.552 28.528 7.552 6.98 0 14.683-1.45 21.777-4.462 1.068-.42 1.945.724.915 1.487zm2.631-3.013c-.8-1.03-5.34-.496-7.36-.229-.611.077-.725-.457-.153-.839 3.623-2.555 9.534-1.792 10.22-.953.687.839-.19 6.789-3.584 9.61-.534.42-1.03.192-.801-.38.763-1.908 2.479-6.14 1.678-7.209zM62.815 3.585V1.106c0-.381.267-.61.61-.61h11.06c.343 0 .648.267.648.61v2.098c0 .343-.305.8-.839 1.563l-5.72 8.162c2.135-.038 4.386.267 6.293 1.335.419.229.533.61.572.953v2.632c0 .381-.382.8-.801.572-3.395-1.792-7.933-1.983-11.67.038-.382.19-.802-.19-.802-.572V15.37c0-.381 0-1.068.42-1.678l6.636-9.497h-5.759c-.343 0-.648-.267-.648-.61zm-40.313 15.37h-3.356c-.305-.038-.572-.267-.61-.572V1.144c0-.343.305-.61.648-.61h3.127c.343 0 .572.267.61.572v2.25h.077c.8-2.174 2.364-3.203 4.424-3.203 2.097 0 3.432 1.03 4.348 3.203.8-2.174 2.67-3.203 4.653-3.203 1.41 0 2.936.572 3.89 1.906 1.068 1.45.839 3.547.839 5.416v10.908c0 .343-.305.61-.649.61h-3.318c-.343-.038-.61-.305-.61-.61V9.23c0-.725.076-2.556-.076-3.242-.267-1.144-.992-1.488-1.983-1.488-.801 0-1.678.534-2.022 1.412-.343.877-.305 2.326-.305 3.318v9.153c0 .343-.305.61-.648.61h-3.356c-.344-.038-.61-.305-.61-.61V9.23c0-1.907.304-4.768-2.06-4.768-2.403 0-2.327 2.746-2.327 4.768v9.153c-.038.305-.305.572-.686.572zM84.668.153c4.996 0 7.704 4.271 7.704 9.725 0 5.263-2.975 9.458-7.704 9.458-4.882 0-7.551-4.271-7.551-9.61-.038-5.378 2.67-9.573 7.551-9.573zm0 3.546c-2.479 0-2.631 3.395-2.631 5.492 0 2.098-.039 6.598 2.593 6.598 2.593 0 2.746-3.623 2.746-5.835 0-1.449-.076-3.203-.496-4.576-.381-1.22-1.144-1.679-2.212-1.679zm14.15 15.256H95.46c-.343-.038-.61-.305-.61-.61V1.068A.66.66 0 0195.5.496h3.127c.305 0 .534.229.61.496v2.631h.077c.953-2.364 2.25-3.47 4.576-3.47 1.488 0 2.975.533 3.928 2.02.878 1.374.878 3.7.878 5.378v10.87c-.038.305-.305.534-.649.534h-3.356c-.305-.038-.572-.267-.61-.534V9.04c0-1.907.229-4.653-2.098-4.653-.8 0-1.563.534-1.945 1.373-.458 1.068-.534 2.098-.534 3.28v9.306a.698.698 0 01-.686.61zm-41.42-.038a.69.69 0 01-.8.076c-1.106-.915-1.335-1.373-1.945-2.25-1.83 1.869-3.166 2.44-5.53 2.44-2.822 0-5.035-1.754-5.035-5.224 0-2.746 1.488-4.577 3.586-5.492 1.83-.801 4.385-.954 6.33-1.182v-.42c0-.8.077-1.754-.419-2.44-.42-.611-1.182-.878-1.869-.878-1.296 0-2.44.648-2.708 2.021-.076.305-.267.61-.572.61l-3.241-.343c-.267-.076-.573-.267-.496-.686C45.46 1.182 49.009 0 52.212 0c1.64 0 3.776.42 5.073 1.678 1.64 1.526 1.487 3.585 1.487 5.797V12.7c0 1.564.648 2.25 1.259 3.128.228.305.266.686 0 .877-.725.572-1.946 1.64-2.632 2.212zm-44.088 0a.69.69 0 01-.8.076c-1.106-.915-1.335-1.373-1.946-2.25-1.83 1.869-3.165 2.44-5.53 2.44C2.212 19.184 0 17.43 0 13.96c0-2.746 1.487-4.577 3.585-5.492 1.83-.801 4.386-.954 6.331-1.182v-.42c0-.8.076-1.754-.42-2.44-.419-.611-1.182-.878-1.868-.878-1.297 0-2.441.648-2.708 2.021-.076.305-.267.61-.572.61l-3.242-.343C.839 5.76.534 5.568.61 5.15 1.373 1.182 4.92 0 8.124 0c1.64 0 3.775.42 5.072 1.678 1.64 1.526 1.487 3.585 1.487 5.797V12.7c0 1.564.649 2.25 1.259 3.128.229.305.267.686 0 .877-.725.572-1.945 1.64-2.632 2.212zm40.695-8.2v-.725c-2.441 0-4.997.534-4.997 3.395 0 1.449.763 2.44 2.06 2.44.953 0 1.792-.571 2.326-1.525.649-1.182.61-2.288.61-3.585zm-44.05 0v-.725c-2.442 0-4.997.534-4.997 3.395 0 1.449.763 2.44 2.06 2.44.953 0 1.792-.571 2.326-1.525.648-1.182.61-2.288.61-3.585z" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;