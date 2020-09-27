FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["hello-docker/hello-docker.csproj", "hello-docker/"]
RUN dotnet restore "hello-docker/hello-docker.csproj"
COPY . .
WORKDIR "/src/hello-docker"
RUN dotnet build "hello-docker.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "hello-docker.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "hello-docker.dll"]